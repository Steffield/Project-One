# Project-One
#Know Your Vote Application


This application was built with the purpose of providing a user's (input based) source for political information such as voting candidates, polling locations, 
and current representives.  

When the user opens the application, they are taken to the index page where the site objectives are located and a link to proceed forward is provided for 
further information.

On the polling page the user can begin to enter their address to obtain personalize information. Clicking on the address bar will immediately ask for 
geolocation permission in order to personalize their request. Then, their address is used to feed the Maps and Civic Info API's for further information 
requests regarding: 

-Polling Location
-Early Voting
-Candidates on Ballot
-Current Representantives

A second row with the related information appears when each link is chosen.

The polling information contains the election name and the date the election occurs, displays a map and a pin that allows the user to locate their designated 
polling location based on their home address, nearest voting location in accordance with thier home address, and a section that states the polling location 
name and hours.

The early voting information provides the user with information pertaining to early voting: location, days, and hours. 
When the user opens the application, they are taken to the index page that describes the purpose of the application. The "Know Your Vote" Button can be 
clicked and starts the apllication.  

Once on the polling.html,,the user will input their street address in the search box above the map that allows the application to pull from the api. On that 
page, the user will input his/her street address in the search box which will auto fill, if the user allows geolocation. The address is used to pull user 
specific information from the api and depending on the button the user clicks: 

-Polling Location,
-Early Voting,
-Candidates on Ballot and
-Current Representatives.

By clicking the specific button the user will be provided with specific information related to the request.

The candidate information presents each cardidate in a card. The cards are sorted by office and party. The card color is related to their party affiliation.

The representative information presents current office holders, their photo, and a URL for further information.

<img src ="./assets/images/appCurrentDesign.png">
<a href="https://mvn410.github.io/Project-One/">Election Info Application</a>
