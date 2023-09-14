from alembic import op
from sqlalchemy import MetaData, Table

def populate_table(table_name, data):
    meta = MetaData(bind=op.get_bind())
    meta.reflect(only=(table_name,))
    table = Table(table_name, meta)
    op.bulk_insert(table, data)

# def populate_history(file_name):
#     file = open(f'./src/migrations/data_table/history/{file_name}_history.sql', encoding="utf8")
#     sql = ''.join(file.readlines())
#     divider = ');'
#     for data in sql.split(divider):
#         if data.strip(): op.execute(data + divider)