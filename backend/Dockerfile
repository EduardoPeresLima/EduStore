FROM tiangolo/uvicorn-gunicorn:python3.10

WORKDIR /backend

COPY ./requirements.txt ./requirements.txt

RUN pip install --no-cache-dir -r ./requirements.txt

COPY . /backend

# CMD [ "uvicorn", "src.api:app", "--host", "0.0.0.0", "--port", "8000", "--reload", "--env-file", "environments/.env.prod" ]