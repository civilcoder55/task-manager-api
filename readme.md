<p align="center">
  <img src="tests/fixtures/img.png" alt="Demo">
</p>

<p align="center">
  <h3 align="center">Simple Nodejs API app with ci/cd workflows</h3>
  <p align="center"> task manager api written in nodejs </p>
</p>

</br>

#### used github actions to make CI/CD pipeline 


</br>

### Usage

1. Clone the repo
    ```sh
    git clone https://github.com/civilcoder55/Nodejs-api-CI-CD.git
    ```

2. Install npm packages
    ```sh
    npm install
    ```

3. Rename config/dev.example.env and config/test.example.env to config/dev.env and config/test.env 
    and add correct variables 

4. to run tests 
    ```sh
    npm run test
    ```

5. to run app 
    ```sh
    npm run dev
    ```





## TO DO

-   [ ] write more test suits .
```
//
// User Test 
//
// Should not signup user with invalid name/email/password
// Should not update user if unauthenticated
// Should not update user with invalid name/email/password
// Should not delete user if unauthenticated

//
// Task Test 
//
// Should not create task with invalid description/completed
// Should not update task with invalid description/completed
// Should delete user task
// Should not delete task if unauthenticated
// Should not update other users task
// Should fetch user task by id
// Should not fetch user task by id if unauthenticated
// Should not fetch other users task by id
// Should fetch only completed tasks
// Should fetch only incomplete tasks
// Should sort tasks by description/completed/createdAt/updatedAt
// Should fetch page of tasks
```