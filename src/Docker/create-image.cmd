docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prilozhenie1/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t prilozhenie1/app ../..
