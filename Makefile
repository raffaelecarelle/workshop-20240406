sh:
	docker compose exec workspace bash

up-build:
	docker compose up -d --build --remove-orphans

up:
	docker compose up -d --remove-orphans

down:
	docker compose down

cy-open:
	docker compose run --rm e2e cypress open