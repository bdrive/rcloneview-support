---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Box for Business verwalten — Enterprise-Cloud-Synchronisation und Backup mit RcloneView"
authors:
  - casey
description: "Konfigurieren Sie Box for Business in RcloneView für Enterprise-Synchronisations-, Backup- und Einbindungs-Workflows über Ihr vom Administrator verwaltetes Box-Konto."
keywords:
  - Box for Business
  - Box for Business verwalten
  - Box Enterprise Cloud-Synchronisation
  - Box Business Backup
  - RcloneView Box
  - box_sub_type enterprise
  - Enterprise Cloud-Speicher Synchronisation
  - Box Konto Backup-Tool
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box for Business verwalten — Enterprise-Cloud-Synchronisation und Backup mit RcloneView

> Box for Business-Konten benötigen eine zusätzliche Einstellung, bevor RcloneView alles sehen kann, was Ihr Administrator bereitgestellt hat — so konfigurieren Sie es richtig.

Ein Standard-Box-Remote funktioniert einwandfrei für ein persönliches Konto, aber ein Box for Business-Konto (Enterprise) strukturiert Ordner und Berechtigungen im Hintergrund anders. Wenn Sie es auf die gleiche Weise verbinden wie ein persönliches Box-Konto, können einige vom Unternehmen verwaltete Inhalte im Explorer fehlen. RcloneView löst dies mit einer dedizierten Einstellung `box_sub_type = enterprise` am Remote, sodass die freigegebenen Ordner Ihres Teams, gemeinsam genutzte Inhalte und vom Administrator bereitgestellter Speicher alle korrekt angezeigt werden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einrichten eines Box for Business Remote

Beginnen Sie damit, einen neuen Remote zu erstellen und Box als Anbieter auszuwählen — die browserbasierte OAuth-Anmeldung funktioniert genauso wie bei einem persönlichen Konto, sodass kein separater Anmeldeablauf erlernt werden muss. Der Unterschied kommt nach der Authentifizierung: Öffnen Sie die erweiterten Einstellungen des Remote und setzen Sie `box_sub_type = enterprise`. Dies weist rclone (die Engine, auf der RcloneView läuft) an, Enterprise-weite Ordnerstrukturen statt der Standardwerte für persönliche Konten aufzulösen.

<img src="/support/images/en/blog/new-remote.png" alt="Erstellen eines neuen Box for Business Remote in RcloneView" class="img-large img-center" />

Nach der Konfiguration durchsuchen Sie den Remote genauso wie jeden anderen — Ordnerbaum-Navigation, Miniaturvorschauen und Dateioperationen (Kopieren, Ausschneiden, Umbenennen, Löschen) funktionieren identisch, unabhängig davon, ob das zugrunde liegende Konto persönlich oder Business ist.

## Synchronisieren und Sichern von Enterprise-Box-Inhalten

Ein häufiges Szenario für IT-Teams ist das Sichern eines Box for Business-Kontos an einem sekundären Standort — einem lokalen NAS, einer anderen Cloud oder S3-kompatiblem Objektspeicher für die Kaltarchivierung. Erstellen Sie einen Synchronisationsauftrag mit Box for Business als Quelle, stellen Sie die Richtung für ein sicheres, nicht-destruktives Backup auf einseitig „nur Ziel ändern" ein, und führen Sie zuerst einen Probelauf aus, um genau zu sehen, was kopiert wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Konfigurieren eines Box for Business Backup-Synchronisationsauftrags in RcloneView" class="img-large img-center" />

Für Abteilungen, die freigegebene Laufwerke über Dutzende von Box-Ordnern hinweg verwalten, sorgt das Filtern nach maximalem Dateialter oder vordefinierten Dokumentenfiltern dafür, dass nächtliche Aufträge sich nur auf Änderungen konzentrieren, statt bei jedem Durchlauf das gesamte Konto neu zu durchsuchen. RcloneView synchronisiert und vergleicht Ordner auch mit der FREE-Lizenz, sodass Enterprise-Backup-Workflows kein Upgrade erfordern, um loszulegen.

## Planen wiederkehrender Enterprise-Backups

Manuelle Exporte skalieren nicht für ein Enterprise-Konto mit mehreren Mitwirkenden, die täglich Dateien hinzufügen. Mit dem Job Manager können Sie die Box for Business-Synchronisation als benannten Auftrag speichern und dann einen Zeitplan im Crontab-Stil (eine PLUS-Lizenzfunktion) anhängen, sodass er automatisch über Nacht oder in jedem von Ihrer Compliance-Richtlinie geforderten Rhythmus ausgeführt wird.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen eines wiederkehrenden Box for Business Synchronisationsauftrags" class="img-large img-center" />

Jeder Durchlauf wird mit Startzeit, Dauer, Übertragungsgeschwindigkeit und Dateianzahl in der Job History erfasst — ein nützlicher Nachweis, wenn ein Audit fragt, wie Backups verifiziert werden.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie einen neuen Box-Remote und schließen Sie die Browser-OAuth-Anmeldung mit Ihren Box for Business-Zugangsdaten ab.
3. Öffnen Sie die erweiterten Einstellungen des Remote und setzen Sie `box_sub_type = enterprise`, um Enterprise-weite Ordner freizuschalten.
4. Erstellen Sie einen Synchronisations- oder Backup-Auftrag, der Box for Business mit einem anderen unterstützten Remote oder lokalem Speicher kombiniert.

Wenn Sie diese eine Einstellung von Anfang an richtig vornehmen, ersparen Sie sich später stundenlange Fehlersuche nach dem Motto „wo sind meine Dateien geblieben".

---

**Weitere Anleitungen:**

- [Box-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dropbox for Business verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [Box zu OneDrive migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
