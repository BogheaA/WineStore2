 Create this web site - steps
1. Install development tools

2. Create Angular App
  1. Create projects folder
  2. Install @angular/cli
  3. Create App as frontend

3. Add Header
  1. Generate Component
  2. Add HTML
  3. Add CSS

4. List Wine
  1. Create Wine model
  2.  Create data.ts
    1. Add sample wines
  3. Add images to assets
  4. Create Wine service
  5. Create home component
    1. Add ts
    2. Add html
    3. Add css
    
5. Search
  1. Add method to Wine service
  2. Add search route
  3. Show search result in Home component
  4. Generate search component
    1. Add to home component
    2. Add ts
    3. Add html
    4. Add css

6. Tags Bar
  1. Create Tag model
  2. Add sample tags to data.ts
  3. Wine service
    1. Add get all tags method
    2. Add get all wines by tag method
  4. Add tags route
  5. Show tag result in Home component
  6. Generate Tags component
    1. Add to home component
    2. Add ts
    3. Add html
    4. Add css    

7. Wine PAGE
  1. Add method to wine service
  2. Generate Wine Page component
    1. Add Route
    2. Add html
    3. Add css 
    4. Add ts

8. Create Cart PAGE
  1. Create Cart item model
  2. Create Cart Model
  3. Generate Cart service
  4. Add to Cart button in Wine Page
  5. Generate Cart page component
    1. Add route
    2. Add ts
    3. Add html
    4. Add css

9. NOT FOUND a element
  1. Generate Component
    ts,html,css
  2. Add to pages
    1. Home page
    2. WIne page
    3. Cart page

10. Create backend
 1. Backend folder
 2. npm install
 3. npm install typescript
 4. Create tsconfig.json
 5. create .gitignore
 6. copy data.ts to backend
 7. npm install express cors
 8. Create server.ts
  1. install @types
  2. add apis
9. npm install nodemon ts-node --save-dev
10. Add urls.ts to frontend
11. Add httpClient module
12. Update wine service

11. Login Page
 1. Generate Component
   1. Add to routes
   2. Add ts
   3. Add html
      1. Import Reactive Forms Module
   4. Add css
 2. Add login Api
   1. Use json
   2. Add jsonwebtoken
 3. Generate User Service
    1. Generate User model
    2. Add User Subject
    3. Add Login Method
      1.Add user urls
      2.Generate IUserLogin interface
      3.Add ngx-toastr
       1. Import module
       2. Import BrowserAnimationModule
       3. Add styles in angular.json
   4. Add to header
   5. AddLocal Storage methods
   6. Add logout Method
     1. Add header

12.  Login Page styles -> later

13. Connect Login API To MongoDB Atlas
    1. Moving Apis into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
       1. mongoose
       2. dotenv
       3. bcryptjs
       4. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in apis

14. Register user
 1. Add Register api
 2. Add register service method
 3. Add register link
 4. Add register component

 to run the site 
 go to backend - run npm start
 go to frontend - run ng serve -o



  