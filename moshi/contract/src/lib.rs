// Find all our documentation at https://docs.near.org
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{env, AccountId, Balance,log, near_bindgen};
use near_sdk::json_types::{U128};  
use near_sdk::collections::{Vector};
use near_sdk::serde::Serialize;
use std::collections::HashMap; 


// Update user info
#[derive(BorshDeserialize, BorshSerialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct User{
    pub first_name: String,
    pub last_name: String,
    pub phone_number: u128,
    pub email:String,
    pub user:AccountId,
}


#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
struct Users{
    users: HashMap<AccountId,User>,
}

impl Default for Users{
    fn default() -> Self {
      Self{users: HashMap::new()}
    }
  }


#[near_bindgen]
impl Users {
    // Public method - returns the greeting saved, defaulting to DEFAULT_MESSAGE
    pub fn get_users(&self) -> &HashMap<AccountId,User> {
        &self.users
    }

    // Public method - accepts a greeting, such as "howdy", and records it
    pub fn update_user(&mut self,first_name: String, last_name: String,phone_number: u128,email:String) {
        log!("Adding product {}", first_name);

        let user = env::predecessor_account_id();
        let m = env::predecessor_account_id();
        let user_details = User{first_name,last_name,phone_number,email,user};
        self.users.insert(m,user_details);
    }

    //getting a specific user
    pub fn get_user(&self , user:AccountId) -> Option<&User>{
        return self.users.get(&user);
    }

    pub fn total_users(&self) -> usize {self.users.len()}
}
// Define the contract structure
#[derive(BorshDeserialize, BorshSerialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct ItemList {
    pub id:String,
    pub item_name: String,
    pub item_quantity: String,
    pub item_price:u64,
}


#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
struct ItemsListed{
    items: HashMap<String,ItemList>,
}

impl Default for ItemsListed{
    fn default() -> Self {
      Self{items: HashMap::new()}
    }
  }


#[near_bindgen]
impl ItemsListed {
    // Public method - returns the greeting saved, defaulting to DEFAULT_MESSAGE
    pub fn get_items(&self) -> &HashMap<String,ItemList> {
        &self.items
    }

    // Public method - accepts a greeting, such as "howdy", and records it
    pub fn add_items(&mut self,id:String, item_name: String, item_quantity: String,item_price: u64) {
        log!("Adding product {}", item_name);

        let m:String = id.clone();
        let item = ItemList{id,item_name,item_quantity,item_price};
        self.items.insert(m,item);
    }



    pub fn total_items(&self) -> usize {self.items.len()}
}


// Define the contract structure
#[derive(BorshDeserialize, BorshSerialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct ResourceList {
    pub id:String,
    pub resource_name: String,
    pub resource_type: String,
    pub resource_description: String,
    pub contract_type:String,
    pub image_proof:String,
    pub provided:bool,
    pub request_farmer:AccountId,
    
}


#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
struct ResourcesListed{
    resources: HashMap<String,ResourceList>,
}

impl Default for ResourcesListed{
    fn default() -> Self {
      Self{resources: HashMap::new()}
    }
  }


#[near_bindgen]
impl ResourcesListed {
    // Public method - returns the greeting saved, defaulting to DEFAULT_MESSAGE
    pub fn get_resources(&self) -> &HashMap<String,ResourceList> {
        &self.resources
    }

    // Public method - accepts resources and records it
    pub fn add_resources(&mut self,id:String, resource_name: String, resource_type: String,
        resource_description: String,contract_type:String,image_proof:String,) {
        log!("Adding product {}", resource_name);

        let r_m:String = id.clone();
        let request_farmer = env::predecessor_account_id();
        let provided = false;
        let resource = ResourceList{id,resource_name,resource_type,resource_description,contract_type,image_proof,provided,request_farmer};
        self.resources.insert(r_m,resource);
    }

    pub fn get_resource(&self,id:String) -> &ResourceList{
        &self.resources[&id]
    }



    pub fn total_resources(&self) -> usize {self.resources.len()}
}

// Define the contract structure
// Land contract structure
#[derive(BorshDeserialize, BorshSerialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct Land {
    pub id:String,
    pub land_owner: String,
    pub land_size: String,
    pub land_image: String,
    pub land_description:String,
    pub land_location:String,
    pub land_price:u64,
    pub contract_type:String,
    pub availability:bool,
    pub land_lister: AccountId,
}


#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
struct LandsListed{
    lands: HashMap<String,Land>,
}

impl Default for LandsListed{
    fn default() -> Self {
      Self{lands: HashMap::new()}
    }
  }

#[near_bindgen]
impl LandsListed {
    // Public method - returns the lands saved
    pub fn get_lands(&self) -> &HashMap<String,Land> {
        &self.lands
    }

    //getting a specific land
    pub fn get_land(&self , id:String) -> Option<&Land>{
        return self.lands.get(&id);
    }

    // Public method - accepts a land listing
    pub fn add_lands(&mut self,id:String, land_owner: String,
        land_size: String,land_image: String,land_description:String,
        land_location:String,land_price:u64,contract_type:String,
    ) {
        log!("Adding land {}", land_owner);

        let land_lister = env::predecessor_account_id();

        let availability = true;

        let l:String = id.clone();
        let land = Land{id,land_owner,land_size,land_image,land_description,land_location,land_price,contract_type,availability,land_lister};
        self.lands.insert(l,land);
    }

    pub fn update_land(&mut self,id:String, land_owner: String,
        land_size: String,land_image: String,land_description:String,
        land_location:String,land_price:u64,contract_type:String,){
        
            let land_lister = env::predecessor_account_id();

            let availability = true;

            let id_h = id.clone();
            
        let land_update = Land{id,land_owner,land_size,land_image,land_description,land_location,land_price,contract_type,availability,land_lister};

        self.lands.insert(id_h,land_update);

    }

    pub fn total_lands(&self) -> usize {self.lands.len()}
}

/*
 * The rest of this file holds the inline tests for the code above
 * Learn more about Rust tests: https://doc.rust-lang.org/book/ch11-01-writing-tests.html
 */
#[cfg(test)]
mod tests {
    use super::*;


    #[test]
    fn add_item() {
      let mut contract = ItemsListed::default();
      let p:u64 = 12000;
      let id:String = "1".to_string();
      let y:String = id.clone();
      let z:String = id.clone();
      contract.add_items(id,"Laptop".to_string(),"1".to_string(),p);
  
      let posted_item = &contract.get_items();
      
      assert_eq!(posted_item.get(&y).unwrap().item_price, p);
      assert_eq!(posted_item.get(&z).unwrap().item_name, "Laptop".to_string());
    }
  
    #[test]
    fn iters_items() {
      let mut contract = ItemsListed::default();
      let id1:String = "1".to_string();
      let id2:String = "2".to_string();
      let id3:String = "3".to_string();
      
      let p1:u64 = 1000;
      let p2:u64 = 2000;
      let p3:u64 = 1000;
      let x:String = id3.clone();
      let g:String = id3.clone();
      contract.add_items(id1,"1st item".to_string(),"1 q".to_string(),p1);
      contract.add_items(id2,"2nd item".to_string(),"2 q".to_string(),p2);
      contract.add_items(id3,"3rd item".to_string(),"3 q".to_string(),p3);
      
      let total = &contract.total_items();
      assert!(*total == 3);
  
      let last_item = &contract.get_items();
      
      assert_eq!(last_item.get(&x).unwrap().item_price, p3);
      assert_eq!(last_item.get(&g).unwrap().item_name, "3rd item".to_string());
    }

    #[test]
    fn update_user() {

      let mut contract = Users::default();
      let user = env::predecessor_account_id();
      let p:u128 = 0789877887;
      let account_id:AccountId = user.clone();
      let account_id_c2:AccountId = user.clone();

      contract.update_user("peter".to_string(),"kagwe".to_string(),p,"kagwe@gmail.com".to_string());
  
      let posted_user = &contract.get_users();
      
      assert_eq!(posted_user.get(&account_id).unwrap().phone_number, p);
      assert_eq!(posted_user.get(&account_id_c2).unwrap().user, user);
    }
  
    #[test]
    fn iters_users() {
      let mut contract = Users::default();
      let user = env::predecessor_account_id();

      
      let p1:u128 = 07891000;
      let p2:u128 = 07892000;
      let p3:u128 = 07891000;
      let x:AccountId = user.clone();
      let g:AccountId = user.clone();
      let z:AccountId = user.clone();
      contract.update_user("Sam".to_string(),"kama".to_string(),p1,"kagwe@gmail.com".to_string());
      contract.update_user("Juma".to_string(),"Masa".to_string(),p2,"juma@gmail.com".to_string());
      contract.update_user("Saul".to_string(),"king".to_string(),p3,"saul@gmail.com".to_string());
      
      let total = &contract.total_users();
      assert!(*total == 1);
  
      let last_user = &contract.get_users();
      
      assert_eq!(last_user.get(&x).unwrap().phone_number, p3);
      assert_eq!(last_user.get(&g).unwrap().user, z);

    }

    #[test]
    fn add_resource() {

      let mut contract = ResourcesListed::default();
      let user = env::predecessor_account_id();
      let p:String = "0789877887".to_string();
      let resource_id:String = p.clone();
      let resource_id_c2:String = p.clone();

      contract.add_resources(p,"knapsack".to_string(),"Machine".to_string(),"Description".to_string(),"lease".to_string(),"https://image".to_string());
  
      let posted_resource = &contract.get_resources();
      
      assert_eq!(posted_resource.get(&resource_id).unwrap().resource_name, "knapsack".to_string());
      assert_eq!(posted_resource.get(&resource_id_c2).unwrap().request_farmer, user);
    }
  
    #[test]
    fn iters_resources() {
        // pub id:String,
        // pub resource_name: String,
        // pub resource_type: String,
        // pub resource_description: String,
        // pub contract_type:String,
        // pub image_proof:String,
        // pub provided:bool,
        // pub request_farmer:AccountId,
      let mut contract = ResourcesListed::default();
      let request_user = env::predecessor_account_id();

      
      let p1:String = "07891000".to_string();
      let p2:String = "07891010".to_string();
      let p3:String = "07891020".to_string();

      let v:String = p1.clone();
      let x:String = p1.clone();
      let g:String = p3.clone();
      let z:String = p3.clone();

      contract.add_resources(p1,"Tractor".to_string(),"Machine".to_string(),"Description".to_string(),"lease".to_string(),"https://image".to_string());
      contract.add_resources(p2,"Incubator".to_string(),"Machine".to_string(),"Description".to_string(),"lease".to_string(),"https://image".to_string());
      contract.add_resources(p3,"Sprayer".to_string(),"Machine".to_string(),"Description".to_string(),"lease".to_string(),"https://image".to_string());
      
      let total = &contract.total_resources();
      assert!(*total == 3);
  
      let last_resource = &contract.get_resources();
      
      assert_eq!(last_resource.get(&g).unwrap().resource_name, "Sprayer".to_string());
      assert_eq!(last_resource.get(&z).unwrap().request_farmer, request_user);

      let user_get = &contract.get_resource(x);

      assert_eq!(user_get.provided,false);

    }


    #[test]
    fn add_land() {
      let mut contract = LandsListed::default();
      let p:u64 = 12000;
      let id:String = "1".to_string();
      let y:String = id.clone();
      let z:String = id.clone();
    //   pub land_owner: String,
    //   pub land_size: String,
    //   pub land_image: String,
    //   pub land_description:String,
    //   pub land_location:String,
    //   pub land_price:u64,
    //   pub contract_type:String,
      contract.add_lands(
        id,"Kagwe".to_string(),"!/4 Acre".to_string(),
        "image url".to_string(),"land_description".to_string(),
        "Nakuru".to_string(),p,"Lease".to_string());
  
      let posted_land = &contract.get_lands();
      
      assert_eq!(posted_land.get(&y).unwrap().land_price, p);
      assert_eq!(posted_land.get(&z).unwrap().land_owner, "Kagwe".to_string());
    }
  
    // test get lands | get land
    #[test]
    fn iters_lands() {
      let mut contract = LandsListed::default();
      let id1:String = "1".to_string();
      let id2:String = "2".to_string();
      let id3:String = "3".to_string();
      
      let p1:u64 = 1000;
      let p2:u64 = 2000;
      let p3:u64 = 1000;
      let x:String = id3.clone();
      let g:String = id3.clone();
      let l:String = id2.clone();
      let u:String = id2.clone();
      let lu:String = id2.clone();

      contract.add_lands(id1,"Felix".to_string(),"1 acre".to_string(),"Land Url".to_string(),"land desc 1".to_string(),"Maseno".to_string(),p1,"Partner".to_string());
      contract.add_lands(id2,"Onchez".to_string(),"2 acre".to_string(),"Land Url 2".to_string(),"land desc 2".to_string(),"Embu".to_string(),p2,"Lease".to_string());
      contract.add_lands(id3,"Ted".to_string(),"3 acre".to_string(),"Land Url 3".to_string(),"land desc 3".to_string(),"Kisumu".to_string(),p3,"Partner".to_string());
      
      let total = &contract.total_lands();
      assert!(*total == 3);
  
      let last_land = &contract.get_lands();
      
      assert_eq!(last_land.get(&x).unwrap().land_price, p3);
      assert_eq!(last_land.get(&g).unwrap().land_owner, "Ted".to_string());

      let land = &contract.get_land(l);

      assert_eq!(land.unwrap().land_owner,"Onchez".to_string());

      let mut contract_update = LandsListed::default();

      contract_update.update_land(u,"Onchezz".to_string(),"2 acre".to_string(),"Land Url 2".to_string(),"land desc 2".to_string(),"Embu".to_string(),p2,"Lease".to_string());

      
      let land_updated = &contract_update.get_land(lu);
      
      assert_eq!(land_updated.unwrap().land_owner,"Onchezz".to_string());

      let total_with_update = &contract_update.total_lands();
      assert!(*total == 3);




    }

    #[test]
    fn iter_land(){

    }

}
