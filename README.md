### How to run the project
#### Run in Docker
- Run the command `npm run prod`
- Access frontend at `localhost:4200`
- Access backend swagger at `localhost:8000/docs`
#### Run locally

- Development tools versions necessary
    - Frontend
        - npm 9.8.1
        - Node 18.18.2
        - Angular CLI 16.2.7
    - Backend
        - Python 3.10.11
    - Database
        - MariaDB 
- Database
    - Create a database named `edustore`
- Backend
    - `cd backend`
    - Create a virtual environment and access it
    - `pip install -r requirements.txt` to install python dependencies
    - `alembic upgrade head` to run the migrations creating tables
    - `uvicorn src.api:app --host 0.0.0.0 --port 8000` to run the backend
    - Access backend swagger at `localhost:8000/docs`
    
- Frontend
    - `cd frontend`
    - `npm i` to install dependencies
    - `npm run dev` to run the frontend
    - Access frontend at `localhost:4200`

### Diagrams created for development

- [Lucid Chart](https://lucid.app/lucidchart/f67a5eec-203f-4507-9084-23cb426f1bd7/edit?viewport_loc=-5038%2C-1120%2C3328%2C1939%2C19zaafkJCjLk&invitationId=inv_eaf16723-3c44-41c7-99b5-4c6c6eba3c9c)
<details>
<summary>Usecase Diagram for Buyer v2</summary>

![UseCase for Buyer](idea/diagrams/UseCase/v2_UseCase_Buyer.png)
</details>
<details>
<summary>Usecase Diagram for Seller v2</summary>

![UseCase for Seller](idea/diagrams/UseCase/v2_UseCase_Seller.png)
</details>
<details>
<summary>Entity Relationship Diagram v3</summary>

![ER](idea/diagrams/ER/v3_ER.png)
</details>