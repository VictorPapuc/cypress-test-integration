Feature: Account Page 

As a valid user I want to log in into Application and Search for transactions

Background: 
 Given The user access George Application Login page
 When The user switches login page language to "English"
 And Access Page with correct credentials

#User should be replaced with some valid input
Scenario: Search availabe Tranzaction
 When The user acces the profile Settings
 And Changes the language to "English" 
 And Return to Overview page
 And The user searches for "liftago" transaction
 Then The user see transactions from date: "January"

#User should be replaced with some valid input
Scenario: Search availabe Tranzaction and access tranzaction
 When The user acces the profile Settings
 And Changes the language to "English" 
 And Return to Overview page
 And The user searches for "liftago" transaction
 And Accesss transaction with position 1 from transaction list
 Then Transaction should be in Category "Taxi"

 #Negative Scenario
Scenario: Search unavailabe Tranzaction 
 And The user acces the profile Settings
 And Changes the language to "English" 
 And Return to Overview page
 And The user searches for "bad_search" transaction
 Then "I'm sorry, I could not find what you were searching for. Could you please specify your search criteria?" is message prompted

Scenario: Search Outgoing Tranzaction after checking box: Display outgoing transactions in red
 And The user acces the profile Settings
 And Changes the language to "English" 
 And Check box Display outgoing transactions in red from profile setting
 And Return to Overview page
 And The user searches for "liftago" transaction
 Then The user should see outgoing transactions in red color

