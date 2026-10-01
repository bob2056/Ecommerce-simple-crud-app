# SOLID Principle 
# API Development 

## REST 
## GraphQL
## SOAP
## gRPC

## Public API
  - open to all 
## Private API
  - Accessible only to limited or allowed user


## Auth 
  - Register and Login Flow `Register => Activate => login => Dashboard Access => logout`
  - Forget Password flow `Forget Password Request => Email Send => Verify request => Password reset => Password reset`
  - LoggedIn User Password `Login => Change Password => Logout => Login with new password`
  - Login Flow `Login Request => OTP Send => OTP Verify => login Session Create => Dashboard Access => Logout`


## MVC Pattern 
  - Model view and Controller 
  - 3 layer (3 Tier)
  ```
    Data Layer (Database/ mongodb or sql)
    (Model)


    Business Layer (API Srver / Backend Server)
    (Logical or Business Logic) (controller)


    Presentation Layer (View/react or next)
    (View)

    

            Sends
    View ===Request===> Controller
  ```
# Middleware 
  - a function that executes and handle the request changes 
    - Can manipulate request
    - Can respond to client 
    - Can send to next middleware call
    - Can send to error handling middleware
  ```js
    function(req: Request, res: Response, next: NextFunction) {
      // logic
    }
  ```
  - Types 
    - Application level middleware
    - Routing level Middleware
    - Default middlewares(builtin middleware) / body parsers
    - Error handling Middleware
    - Custom Middlewares
    
    - Third party middlewares (Multer)


  - Role vs permission vs policy

  - Role user associated data 
    
    - Create post (permission: create-post)
    - Update Post (permission: update-post)

    - Admin: [create-post, update-post]

    - AdminPolicy: [create-post, update-post]
    - User or Role: 
      - Ram => AdminPolicy
      - Admin => AdminPolicy
    - Ram => Admin

    - individual access level

# Exception handling for form Validation 
```json
    // 400
    {
        "data": {
            "name": "Name must have atleast 2 character",
            "email": "Email is compulsory"
        },
        "message": "Validation Failed",
        "meta": null
    }
```

# SQL vs NoSQL
  - SQL - Structure query language 
    - Table format (data structure)
    - Relational Database 
  - NoSQL - Not only SQL
  - e.g. Ecommerce -> user, product -> user creates product -> User Creates order -> order has product and user
## SQL - ORM 
## NoSQL - ODM
  - mongodb
  - json record - Documents - collection 

## Normalization 

### DDD vs TDD vs BDD
  - Design Driven Development
  - Test Driven Development
  - Behavioral Driven Development

## Data identification 
// Task is to identify the data in the project 
  - Users
  - Roles
  - Categories 
  - Brands
  - Products
  - Orders 
  - Invoices
  - Reviews
  - Offers
  - Inventory


# 


  Firewall
    DNS (cloudflare/route53)
      Auth protect
        Server Access




# 
  - Purchase  Items (products)
  - Receipe Product Items qty
  - Orders Menu/Receipe 

  - inventory 
    - product -> id = 1, name: chicken, 
    - purchases -> id = 1, productId: 1, quantity: 10, unit: kg
    - receipe -> id: 1, productId: 1, quantity: 500 gm, ...
    - order -> id: 1, quantity: 2, receipe: 1, staus: approve
    
    - inventory
    - id, productId, quantity, status(in, out) purchaseId orderId
    - 1   1           10000     in              1         null
    - 2   1           1000      out             null      1


    - Stock
      - inventory sum(in) - sum(out) of product

  - Stock (Products)

  - All products added - all receipe products ordered(Products)
    - orders - each receipe - products - qunatity * ordered quantiy

- 8 medicine - chemo ready - Radio Isotop - decay
- 9AM appointment -> 100ml
- 10Am appointment -> 120ml

- SAAS (laravel API, React)
- Daily operation - Record
- Radio Isotop prep - checklist 
- Inventory system 
- Reporting 
- Appointment booking


- SAAS 
- Barber chain (System)


# SQL Server 
- Server Setup 
  - Db setup (Physical)
  - Table Development 
    - Migrations
    - Default data populate - master data - seeding 
- Coding 
  - Connecting to server 
  - Developing model 
  - Query

# SQL 
```sql 
    // SELECT , sender.name as sender,  FROM messages
    // LEFT JOIN users as sender ON messages.sender = sender.id
    // LEFT JOIN users on receirver ON receriver.id = messages.receiver
    // WHERE 
    // (sender = loggedInUser._id OR receiver = userId) OR 
    // (sender = userId OR receiver = loggedInUser._id)

    // user detail found 
    // SELECT <fields> FROM <table>
    // JOIN Operations 
    // WHERE clause 
    // GROUP BY condition
    // ORDER BY Direction 
    // HAVING clause
    // LIMIT index, count 
```