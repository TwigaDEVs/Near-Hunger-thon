# Near-Hunger-thon

# Hambre (It is a spanish word that means *hunger*)

# About; 

The system will have 3 features which include:
      -It will aim to maximize the Productivity of arable lands.
      -Provide market places/oppotunities between the buyer(consumer) and seller(farmer).
      -Education to the farmers where they will provided with the best recommendations on the best way to achieve those requirements.
# Installations;

rust language "https://doc.rust-lang.org/book/ch01-01-installation.html":
 
             -- $ curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh

npm:
 
    -- 'npm install'
    -- npm -v
    
node js:
       
    -- 'nodejs install'
    -- nodejs -v

# Moving into the system

Clone the repo, then:

             -- cd Near-Hunger-thon      
             -- cd moshi

Run the commands:
=================

Build and deploy your contract to TestNet with a temporary dev account:

    npm run deploy

Test your contract:

    npm test

In the moshi/frontend directory for it to run on the server:

             -- npm start 
             or
             -- npm run start
             or 
             -- yarn start


N/B; incase of any errors during run time;

             -- cd frontend 
             *check if the 'node_modules' are installed.

             *If the 'node_modules' directory exist, run these commands:
             -- rm -r node_modules
             -- npm install

# Code exploration

1. The smart-contract code lives in the `/contract` folder. See the README there for
   more info. In blockchain apps the smart contract is the "backend" of your app.

![My Remote Image](https://res.cloudinary.com/dra2940ap/image/upload/v1671100378/images%20and%20videos/ezgif.com-gif-maker_1_bcq9bt.webp)
   

2. The frontend code lives in the `/frontend` folder. `/frontend/index.html` is a great
   place to start exploring. Note that it loads in `/frontend/index.js`,
   this is your entrypoint to learn how the frontend connects to the NEAR blockchain.

![My Remote Image](https://res.cloudinary.com/dra2940ap/image/upload/v1671104334/images%20and%20videos/ezgif.com-gif-maker_3_ha1w6q.webp)

3. Test your contract: `npm test`, this will run the tests in `integration-tests` directory.

# App startUp

The server will startup on http://localhost:1234

![homepagehambre](https://user-images.githubusercontent.com/92982964/207962913-07cfdc86-e28d-49a2-a459-49f007173fba.png)

Login into the system by connecting to with the wallet,![My Remote Image](https://res.cloudinary.com/dra2940ap/image/upload/v1671052276/images%20and%20videos/Screenshot_from_2022-12-13_09-31-49_dabxzd.png)

Then the path to wallet is displayed, this will enable the user to either create a new 
wallet or connect to the existing wallet;

![My Remote Image](https://res.cloudinary.com/dra2940ap/image/upload/v1671052275/images%20and%20videos/Screenshot_from_2022-12-13_09-31-31_u0lssu.png)

