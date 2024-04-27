from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .config.config_db import origins
from .routes.routes import routes


description = """
`@brief`      Project with Angular/Python/MariaDB\n
`@author`     **Eduardo Peres** \\<epl.eng18@uea.edu.br\\>\n

## Introduction
A project to learn more about creating a whole front-back-db web application
"""

app = FastAPI(
    title="Project with Angular/Python/MariaDB",
    description=description,
    version="0.0.1"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

for route in routes:
    app.include_router(route.router) 