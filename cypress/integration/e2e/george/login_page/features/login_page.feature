Feature: Login to Application

As a valid user I want to log in into Application
As a invalid user I should be prompted with error message

 @test
Scenario: Login in to George Bank Application with Nickname that is less than 6 characters
 Given The user access George Application Login page
 When The user switches to "English" language
 And The user types the following nickname: "abc"
 And User presses continue in button
 Then Error message " Attention! Field \"Client number \/ Username\" must have the minimum of 6 characters. " should appear

 @test
Scenario: Login in to George Bank Application with Bad Credentials
 Given The user access George Application Login page
 When The user switches to "English" language
 And The user types the following nickname: "InvalidUser1"
 And User presses continue in button
 And The user enters number of days: 12 and chooses "April" month
 And Check box for Remember for this device
 And User presses continue in button
 Then Error message " Combination of security information is not correct. " should appear

 @test
Scenario: Login in to George Bank Application with incorrect number of days
 Given The user access George Application Login page
 When The user switches to "English" language
 And The user types the following nickname: "InvalidUser1"
 And User presses continue in button
 And The user enters number of days: 32 and chooses "April" month
 And User presses continue in button
 Then Error message " The given date of birth is not valid. Please try again in the format for example 7 December " should appear

@test
Scenario: Login in to George Bank Application without No input
 Given The user access George Application Login page
 When The user switches to "English" language
 And The user types the following nickname: "InvalidUser1"
 And User presses continue in button
 Then Error message " The given date of birth is not valid. Please try again in the format for example 7 December " should appear
