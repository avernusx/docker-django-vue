cd /var/www
yarn
if [ $ENV = dev ]
then
  echo 'dev'
  yarn dev
else
  echo 'prod'
  yarn build
  yarn start
fi