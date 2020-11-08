up:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

build:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml build

yarn/install:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml exec ui yarn install

rails/prepare:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml exec api rails db:prepare
