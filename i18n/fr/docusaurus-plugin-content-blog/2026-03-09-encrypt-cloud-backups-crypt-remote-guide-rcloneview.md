---
slug: encrypt-cloud-backups-crypt-remote-guide-rcloneview
title: "Chiffrer vos sauvegardes cloud avec Rclone Crypt — Chiffrement zero-knowledge pour Google Drive, S3 et plus"
authors:
  - tayson
description: "Chiffrez vos fichiers cloud avant de les envoyer avec le distant crypt de rclone. Guide complet du chiffrement zero-knowledge pour Google Drive, OneDrive, S3 et tout fournisseur cloud avec RcloneView."
keywords:
  - chiffrer le stockage cloud
  - distant crypt rclone
  - chiffrement zero knowledge cloud
  - chiffrer les fichiers google drive
  - sauvegarde cloud chiffrée
  - guide de chiffrement rclone
  - chiffrer les fichiers onedrive
  - chiffrement côté client cloud
  - chiffrer les fichiers s3
  - outil de stockage cloud chiffré
tags:
  - encryption
  - crypt
  - security
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Chiffrer vos sauvegardes cloud avec Rclone Crypt — Chiffrement zero-knowledge pour Google Drive, S3 et plus

> Quand vous envoyez des fichiers vers Google Drive, Google peut les lire. Quand vous stockez des données sur S3, Amazon peut y accéder. Le distant crypt de rclone change cela — vos fichiers sont chiffrés avant même de quitter votre machine.

Les fournisseurs cloud chiffrent les données « au repos » sur leurs serveurs, mais ils détiennent les clés. Cela signifie que le fournisseur (et potentiellement des agences gouvernementales, des pirates ayant compromis le fournisseur, ou des employés malveillants) peut accéder à vos fichiers. Le distant crypt de rclone offre un véritable chiffrement zero-knowledge : les fichiers sont chiffrés sur votre machine avant l'envoi, et vous seul détenez la clé.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qu'est-ce qu'un distant crypt ?

Un distant crypt est une couche virtuelle qui se place au-dessus de tout distant cloud existant :

```
Vos fichiers → Distant Crypt (chiffre) → Distant cloud (envoie les blobs chiffrés)
```

Lors de la lecture des fichiers :

```
Distant cloud (blobs chiffrés) → Distant Crypt (déchiffre) → Vos fichiers
```

Le fournisseur cloud ne stocke que des données chiffrées. Les noms de fichiers, les noms de dossiers et le contenu des fichiers sont tous chiffrés. Le fournisseur ne peut pas voir ce que vous stockez.

## Comment fonctionne le chiffrement crypt

### Normes de chiffrement

- **Contenu des fichiers** : AES-256 en mode CTR avec authentification HMAC-SHA256.
- **Noms de fichiers** : AES-256 EME (encrypt-mix-encrypt) avec obfuscation optionnelle.
- **Noms de dossiers** : identique aux noms de fichiers (chiffrés par défaut).

### Ce qui est chiffré

| Composant | Mode standard | Avec chiffrement des noms |
|-----------|:---:|:---:|
| Contenu des fichiers | ✅ Chiffré | ✅ Chiffré |
| Noms de fichiers | ❌ Visible | ✅ Chiffré |
| Noms de dossiers | ❌ Visible | ✅ Chiffré |
| Taille des fichiers | ❌ Visible (légèrement modifiée) | ❌ Visible (légèrement modifiée) |
| Structure des dossiers | ❌ Visible | ✅ Chiffrée |

**Recommandation** : activez toujours le chiffrement des noms de fichiers pour une confidentialité maximale.

## Configurer Crypt dans RcloneView

### Étape 1 : disposer d'un distant existant

Ajoutez d'abord votre stockage cloud comme distant normal (par exemple Google Drive, S3, Backblaze B2) :

<img src="/support/images/en/blog/new-remote.png" alt="Add base cloud remote" class="img-large img-center" />

### Étape 2 : créer un distant crypt par-dessus

Ajoutez un nouveau distant de type **Crypt**. Configurez-le pour qu'il pointe vers un dossier de votre distant existant :

- **Distant** : `gdrive:encrypted-backup/` (un dossier sur votre Google Drive).
- **Chiffrement des noms de fichiers** : Standard (chiffré).
- **Chiffrement des noms de dossiers** : Activé.
- **Mot de passe** : un mot de passe fort (c'est votre clé de chiffrement — **ne le perdez pas**).
- **Mot de passe 2 (sel)** : un mot de passe supplémentaire pour plus de sécurité.

### Étape 3 : utiliser le distant crypt

Désormais, lorsque vous parcourez ou transférez des fichiers via le distant crypt, tout est chiffré de manière transparente. Envoi via le distant crypt → les fichiers arrivent chiffrés sur Google Drive. Téléchargement via le distant crypt → les fichiers sont déchiffrés automatiquement.

## Flux de sauvegarde chiffrée

### Configurer une tâche de sauvegarde chiffrée

Créez une tâche de copie depuis votre stockage local (ou un autre cloud) vers le distant crypt :

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create encrypted backup job" class="img-large img-center" />

### Planifier des sauvegardes chiffrées quotidiennes

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule encrypted backup" class="img-large img-center" />

### Ce que voit le fournisseur cloud

Si quelqu'un parcourt votre Google Drive, il voit :

```
encrypted-backup/
  q6r2v8s3f1g4h5j6k7l8/
    a1b2c3d4e5f6g7h8i9j0k1l2m3n4.bin
    p5q6r7s8t9u0v1w2x3y4z5a6b7c8.bin
  m9n0o1p2q3r4s5t6u7v8/
    d9e0f1g2h3i4j5k6l7m8n9o0p1q2.bin
```

Les noms de fichiers sont illisibles. Le contenu est chiffré. Même la structure des dossiers est masquée.

### Ce que vous voyez (via le distant crypt)

```
encrypted-backup/
  Documents/
    tax-return-2025.pdf
    passport-scan.jpg
  Medical/
    lab-results-march.pdf
```

Des fichiers normaux, lisibles — déchiffrés à la volée.

## Cas d'usage pratiques

### 1) Sauvegarde Google Drive chiffrée

Votre Google Drive personnel pour un usage quotidien. Une sauvegarde chiffrée des fichiers sensibles sur ce même Google Drive :

```
gdrive:Documents/     ← Fichiers normaux (Google peut les voir)
gdrive-crypt:Sensitive/ ← Chiffré (Google ne voit que des blobs)
```

### 2) Archive S3 chiffrée

Archivez des données sensibles sur S3 avec un chiffrement côté client. Même si votre compte AWS est compromis, les données restent illisibles sans votre mot de passe.

### 3) Stockage conforme HIPAA/réglementaire

Données de santé, juridiques et financières nécessitant un chiffrement au repos. Les distants crypt offrent un chiffrement côté client vérifiable.

### 4) Protection des données transfrontalières

Stocker des données dans des régions cloud où vous ne faites pas entièrement confiance aux politiques d'accès aux données du fournisseur.

## Vérifier les sauvegardes chiffrées

Utilisez la comparaison de dossiers via le distant crypt pour vérifier que votre sauvegarde chiffrée correspond à la source :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify encrypted backup" class="img-large img-center" />

## Avertissements critiques

### Ne perdez pas votre mot de passe

Il n'existe aucune récupération de type « mot de passe oublié ». Si vous perdez votre mot de passe crypt, vos données chiffrées deviennent définitivement inaccessibles. Personne — ni rclone, ni Google, ni Amazon — ne peut le récupérer.

**Conservez votre mot de passe en lieu sûr :**

- Notez-le et rangez-le dans un coffre-fort physique.
- Utilisez un gestionnaire de mots de passe (distinct du cloud que vous chiffrez).
- Conservez au moins deux copies dans des emplacements différents.

### Ne modifiez pas directement les fichiers chiffrés

Ne modifiez jamais les blobs chiffrés directement chez le fournisseur cloud. Accédez-y toujours via le distant crypt. Une modification directe corromprait les fichiers.

### Impact sur les performances

Le chiffrement ajoute une certaine charge CPU :

- Négligeable sur les ordinateurs de bureau et portables modernes.
- Perceptible sur Raspberry Pi ou appareils peu puissants.
- N'affecte pas la vitesse réseau (le chiffrement a lieu avant l'envoi).

## Plusieurs distants crypt

Vous pouvez créer différents distants crypt pour différents usages :

| Distant Crypt | Pointe vers | Mot de passe | Cas d'usage |
|-------------|-----------|----------|----------|
| crypt-personal | gdrive:encrypted/ | Mot de passe A | Fichiers personnels sensibles |
| crypt-work | s3:work-encrypted/ | Mot de passe B | Documents professionnels |
| crypt-archive | b2:archive-encrypted/ | Mot de passe C | Archive à long terme |

Chacun utilise un mot de passe différent et un stockage sous-jacent différent.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez votre stockage cloud** comme distant classique.
3. **Créez un distant crypt** pointant vers un dossier de ce cloud.
4. **Définissez un mot de passe fort** et conservez-le en lieu sûr.
5. **Utilisez le distant crypt** pour toutes les opérations sur des fichiers sensibles.
6. **Planifiez des sauvegardes chiffrées** pour automatiser le processus.

Vos données. Vos clés. Votre contrôle.

---

**Guides connexes :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Stockage cloud conforme HIPAA](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)

<CloudSupportGrid />
