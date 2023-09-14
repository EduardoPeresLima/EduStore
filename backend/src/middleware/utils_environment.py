from dotenv import dotenv_values
import os

def get_environment_config():
    if os.environ.get('ENVIRONMENT'): return os.environ
    
    env_file_path = os.environ.get('ENV_FILE_PATH')
    if env_file_path: return dotenv_values(env_file_path)
    
    config = dotenv_values('environments/.env')
    environment = config['ENVIRONMENT']
    env_path = config[environment]
    return dotenv_values(env_path)