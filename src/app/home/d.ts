/*

home page : will give the ongoing survey, draft survey, last survey 
create: configure - configure mode, preview mode for single question
survey responses - summary of all response, view/edit response of individual respondent

A question have 4 mode: 
configure -- Mainly to add options; n/a for question types like text
preview -- How it will look to the user
response -- to enter answer
readonly response -- to view entered answer

*/
type survey = {
    title: string,
    description: string,
    id: number,
    canUseAsTemplate: boolean
    templateDescription: string
    status: string,//draft, open, closed, cancelled, delete
    acceptAnswer: boolean,
    qstns: Array<question>,//subcollection
    viewedCount: number//participant who just viewed but not answered it
    unsubmittedResponseCount: number//saved but not submitted
    submittedResponseCount: number//submitted the survey
    plannedStartDate: Date//will be the moment when admin plans to open the survey to collect response
    plannedEndDate: Date//will be the moment by when admin plans to closes the survey
    actualStartDate: Date//will be the moment when admin open the survey to collect response
    actualEndDate: Date//will be the moment when admin closes the survey
};

type question = {//save as master question
    title: string,
    type: string,
    options: Array<string>//save as master options
    hasOther: boolean
    isMandatory: boolean,
    optionsAnswerCount: object//{option1:20}
    skippedQuestionCount: number
}

type surveyResponse = {
    surveyId: string,
    userid: any,
    respondentNumber: number//max value to be equal to submittedResponseCount
    timeSpent: number,
    attemptCount: number//in how many attempts user saved the answer
    status: string//viewed, started, submitted
}

type answer = {//actua
    userId: any
    qstnid: string,
    response: string,
    otherResponse: string
}

type masterOptions = {
    title: string
    options: Array<string>
}
type masterQuestions = {
    title: string
    options: Array<string>
}