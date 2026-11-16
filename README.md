# Communo

Outil d'échange d'objets entre proches. Un petit groupe d'amis qui se font confiance partage les objets qu'il possède déjà : un membre qui a un besoin ponctuel repère qui a l'outil et le demande, sans l'acheter. Le prêteur garde la trace de ce qu'il a prêté, à qui et jusqu'à quand.

## Public visé

- Des personnes qui ont des objets à prêter.
- Des personnes qui ont un besoin ponctuel et ne veulent pas tout acheter.
- Un cercle fermé de personnes qui se connaissent, invitées par lien.

## MVP

« Prêter à un ami et savoir où est mon objet » :

1. Se connecter avec Discord.
2. Créer un groupe et inviter ses proches par lien.
3. Ajouter ses objets, et consulter les objets des membres du groupe.
4. Demander un prêt à un membre, avec une durée.
5. Accepter ou refuser, puis marquer l'objet rendu.
6. Consulter les tableaux « prêté » et « emprunté ».

Hors MVP : catalogue de référence, recherche par usage, demande à tout le groupe, alertes email et Discord.

## Structure du dépôt

```
backend/   API Spring Boot (Java 25, PostgreSQL, Flyway)
frontend/  Application Angular (standalone, Signals)
deploy/    Déploiement : Docker, Compose
```

## Statut

En cadrage. Aucun code n'est encore en place.
