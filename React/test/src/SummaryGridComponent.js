// React imports
import React, { useContext } from 'react';

import { LearnosityItemReviewStatus, LearnosityItemStatus, ReportTypes } from '../../constants/ElmLearnosityConstant';
import {AppInsightsServiceContext} from 'app-insights-react-lib/src/AppInsightsServiceContextProvider';

function SummaryGridComponent(props) {
    const appInsightsServiceContext = useContext(AppInsightsServiceContext);    

    const { activityItems, activityScores, isCourseSlateAssessment, itemReferenceNames, mode, navigateItem, sessionDetails, extraCredits } = props;
    let itemEarnedPoints, itemGridTemplate, itemMaxPoint, itemStatus = '',
        summaryDetails = new SummaryDetails('', 0, Object.keys(activityItems).length, 0);

    itemGridTemplate = (
        Object.keys(activityItems).map(function (item, index) {
            let showFeedbackIcon = false;
            itemMaxPoint = itemEarnedPoints = 0;


            if (itemReferenceNames && itemReferenceNames.length !== 0) {
                showFeedbackIcon = itemReferenceNames.find((id) => {
                    return activityItems[item].source.reference === id;
                });
            }

            activityItems[item].questions.forEach((question) => {
                appInsightsServiceContext.trackPageView("name: Showing item max and earned points");
                //If the mode is 'review', use sessionDetail object to calculate itemMaxPoint and itemEarnedPoints.
                if (mode === ReportTypes.Review) {
                    sessionDetails.forEach((scoreObject) => {
                        if (question.response_id === scoreObject.responseId) {
                            itemStatus = scoreObject.itemStatus;
                            itemMaxPoint += scoreObject.maxScore ? scoreObject.maxScore : 0;
                            itemEarnedPoints += scoreObject.score ? scoreObject.score : 0;
                        }
                    });
                } else {
                    //Start and end summary only need max points to display on each item and we use learnosity itemApp.getScores to calculate it.
                    itemMaxPoint += activityScores[question.response_id] && activityScores[question.response_id].max_score ? activityScores[question.response_id].max_score : 0;
                }
            });

            //Sum the total points of the current activity
            summaryDetails.totalPoints ? summaryDetails.totalPoints += itemMaxPoint : summaryDetails.totalPoints = itemMaxPoint;
            //Sum the total earned points of the current activity
            summaryDetails.totalEarnedPoints ? summaryDetails.totalEarnedPoints += itemEarnedPoints : summaryDetails.totalEarnedPoints = itemEarnedPoints;
            //Map learnosity attempted status of the current item with our custom label which needs to be displayed on the summary.
            /**Learnosity's value - not_attempted/fully_attempted/partially_attempted
             * Our required own label - Unanswered/Answered/Partially Answered
             */

            if (mode === ReportTypes.Review) {
                return (<div className="item-card" data-index={index} data-reference={item} onClick={() => navigateItem(index)} role="dialog" tabIndex="0" key={item} onKeyPress={() => navigateItem(index)}>
                    <ul className={`item-grid ${itemStatus === LearnosityItemReviewStatus.Correct || itemStatus === LearnosityItemReviewStatus.PartiallyCorrect ? "attempted-item" : ""}`}>
                        <li><i className={`fas fa-circle-o ${itemStatus === LearnosityItemReviewStatus.Correct || itemStatus === LearnosityItemReviewStatus.PartiallyCorrect 
                                ? "fa-circle" : itemStatus === LearnosityItemReviewStatus.Incorrect 
                                ? "fa-circle-incorrect" 
                                : "fa-circle-needs-grading"}`}>
                            </i>
                            <span className={itemStatus === LearnosityItemReviewStatus.Incorrect ? "incorrect-item-status" : ""}> Item {index + 1} - {itemStatus}</span>
                            <span className="pull-right">
                                {
                                    showFeedbackIcon && <span className="teacher-feedback">
                                        <i className="material-icons">chat</i>Teacher Feedback</span>
                                }
                                {
                                    (itemStatus === LearnosityItemReviewStatus.Correct || itemStatus === LearnosityItemReviewStatus.Incorrect || itemStatus === LearnosityItemReviewStatus.PartiallyCorrect) &&
                                    <span className='item-total-points'>
                                        <span className='item-total-points'>{itemEarnedPoints}/{itemMaxPoint} {itemEarnedPoints <= 1 ? ' Point Earned' : ' Points Earned'}</span>
                                    </span>
                                }
                                {
                                    (itemStatus === LearnosityItemReviewStatus.NeedsGrading || itemStatus === LearnosityItemReviewStatus.Unanswered) &&
                                    <span className='item-total-points'>
                                        <span className='item-total-points' ng-if="${itemMaxPoint} === 1 "> {itemMaxPoint}  {itemMaxPoint === 1 ? ' Point Possible' : ' Points Possible'} </span>
                                    </span>
                                }
                            </span></li></ul>
                </div>)
            } else {
                switch (activityItems[item].attempt_status) {
                    case LearnosityItemStatus.FullyAttempted:
                        itemStatus = LearnosityItemStatus.Answered;
                        break;
                    case LearnosityItemStatus.NotAttempted:
                        itemStatus = LearnosityItemStatus.NotAnswered;
                        break;
                    case LearnosityItemStatus.PartiallyAttempted:
                        itemStatus = LearnosityItemStatus.PartiallyAnswered;
                        break;
                    //as there is no default case kept as empty.
                    default: break;
                }
                return (<div className="item-card" data-index={index} data-reference={item} role="tab" tabIndex="0" key={item}>
                    <ul className={`item-grid ${activityItems[item].attempt_status === LearnosityItemStatus.FullyAttempted ? "attempted-item" : ""}`}>
                        <li><i className={`fas fa-circle-o ${activityItems[item].attempt_status === LearnosityItemStatus.FullyAttempted ? "fa-check-circle" : ""}`}></i>
                            <span>Item {index + 1} - {itemStatus}</span>
                            <span className='item-total-points'> {itemMaxPoint}
                                {
                                    itemMaxPoint > 1 ? ' Points Available' : ' Point Available'
                                }
                            </span>
                        </li></ul>
                </div>)
            }
        })
    )
    const totalPercentage = Math.round((summaryDetails.totalEarnedPoints + extraCredits) / summaryDetails.totalPoints * 100);

    return (
        <div>
            {
                mode !== 'review' && <div className="total-items">
                    <span>
                        {summaryDetails.totalItems} Assessment Items
                    </span>
                    <span className="total-points">
                        {summaryDetails.totalPoints} Total Points Available
                    </span>
                </div>
            }

            {
                mode === 'review' && <div>
                    {
                        isCourseSlateAssessment &&
                        <div className="total-items">
                            <span>
                                {summaryDetails.totalItems} Assessment Items
                            </span>
                            <span className='total-points'>{summaryDetails.totalEarnedPoints}/{summaryDetails.totalPoints} Points Earned</span>
                        </div>
                    }
                    {
                        props.platform !== "BUZZ" && !isCourseSlateAssessment && <div className='review-total-items'><span>{summaryDetails.totalItems} Assessment Items</span>
                         <span className='total-percentage'><b>{totalPercentage}%</b> ({summaryDetails.totalEarnedPoints + extraCredits}/{summaryDetails.totalPoints} Points Earned)</span><br />
                         <span className="extra-credit">Correct:<b> {summaryDetails.totalEarnedPoints}/{summaryDetails.totalPoints}</b>, Extra Credit: <b>{extraCredits}</b></span>
                         </div>
                    }
                    {props.platform === "BUZZ" && 
                        <div className="total-items">
                            <span>
                                {summaryDetails.totalItems} Assessment Items
                            </span>
                            <span className='total-points'> {summaryDetails.totalEarnedPoints + extraCredits}/{summaryDetails.totalPoints} Points Earned</span>
                        </div>
                    }
                </div>
                
            }

            <div className="summary-grid">
                {
                    itemGridTemplate
                }
            </div>
        </div>
    );
}

export class SummaryDetails {
    itemGridTemplate;
    totalEarnedPoints;
    totalItems;
    totalPoints;
    constructor(
        itemGridTemplate,
        totalEarnedPoints,
        totalItems,
        totalPoints
    ) {
        this.itemGridTemplate = itemGridTemplate;
        this.totalEarnedPoints = totalEarnedPoints;
        this.totalItems = totalItems;
        this.totalPoints = totalPoints;
    }
}

export default SummaryGridComponent;