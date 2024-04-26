from dotenv import dotenv_values
import os

def get_environment_config():
    if os.environ.get('ENVIRONMENT'): return os.environ
    prefix_location = './'
    #ENV_FILE_PATH exists only if it is set on docker
    env_file_path = os.environ.get('ENV_FILE_PATH')
    if env_file_path: 
        values = dotenv_values(f'{prefix_location}{env_file_path}')
        return values
    #ENV_FILE_PATH does not exist, so we use environments/.env
    config = dotenv_values(f'{prefix_location}environments/.env')
    environment = config['ENVIRONMENT']
    env_path = config[environment]
    values = dotenv_values(f'{prefix_location}{env_path}')
    return values