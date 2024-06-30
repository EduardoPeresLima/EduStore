from alembic import op

def populate_history(file_name:str, version:int,  divider = ');'):
    file = open(f'./src/migrations/history/{file_name}_v{version}.sql', encoding="utf8")
    sql = ''.join(file.readlines())
    for data in sql.split(divider):
        if data.strip(): op.execute(data + divider)