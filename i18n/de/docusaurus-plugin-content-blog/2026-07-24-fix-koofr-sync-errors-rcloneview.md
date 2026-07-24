---
slug: fix-koofr-sync-errors-rcloneview
title: "Koofr-Synchronisationsfehler beheben — Fehlersuche und Lösung mit RcloneView"
authors:
  - morgan
description: "Beheben Sie häufige Koofr-Synchronisationsfehler in RcloneView, von fehlgeschlagenen Anmeldungen über Kontingentgrenzen bis zu blockierten Übertragungen, mit klaren Schritt-für-Schritt-Lösungen."
keywords:
  - Koofr Synchronisationsfehler
  - Koofr RcloneView beheben
  - Koofr Anmeldung fehlgeschlagen
  - Koofr Verbindungs-Timeout
  - Koofr Kontingent überschritten
  - RcloneView Fehlersuche
  - Koofr Cloud-Synchronisation
  - Koofr Backup-Fehler
  - Koofr rclone
  - Cloud-Speicher Fehlersuche
tags:
  - RcloneView
  - koofr
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr-Synchronisationsfehler beheben — Fehlersuche und Lösung mit RcloneView

> Koofr-Sync-Jobs stocken, scheitern bei der Authentifizierung oder überspringen stillschweigend Dateien? **RcloneView** gibt Ihnen die Transparenz und die Werkzeuge, um das Problem schnell zu diagnostizieren und zu lösen.

Koofr ist ein solider europäischer Cloud-Speicheranbieter, aber wie bei jedem Anbieter können bei Sync-Jobs Authentifizierungsprobleme, Kontingentgrenzen oder Übertragungsfehler auftreten, die Sie ratlos zurücklassen. Die Werkzeuge Job History, Log-Tab und Dry Run von RcloneView machen es einfach, die Ursache zu finden, statt zu raten. Diese Anleitung führt durch die häufigsten Koofr-Synchronisationsfehler und zeigt, wie Sie jeden davon direkt in RcloneView beheben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Anmelde- oder Verbindungsfehler

Wenn sich ein Koofr-Remote plötzlich nicht mehr verbinden lässt, sind möglicherweise die gespeicherten Zugangsdaten abgelaufen oder auf der Koofr-Kontoseite widerrufen worden, oder eine bei Koofr geänderte Passwort wurde nicht in RcloneView übernommen.

**So beheben Sie es:**

Öffnen Sie den Remote Manager, wählen Sie das Koofr-Remote aus und geben Sie Ihre Zugangsdaten erneut ein, um die Verbindung zu aktualisieren. Wenn das Remote weiterhin nicht verbindet, löschen Sie es und fügen Sie es über den New-Remote-Assistenten als neues Remote hinzu, statt das defekte zu bearbeiten — eine saubere Neuauthentifizierung behebt die meisten Probleme mit veralteten Sitzungen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

## Sync-Jobs schlagen auf halbem Weg fehl

Ein Job, der einige Dateien kopiert und dann stoppt, oder in der Job History den Status "Errored" zeigt, deutet meist auf ein vorübergehendes Netzwerkproblem, eine Ratenbegrenzung oder eine einzelne problematische Datei (ungültige Zeichen, ungewöhnlich langer Pfad oder eine 0-Byte-Sperrdatei) hin, die den Rest des Batches blockiert.

**So beheben Sie es:**

Öffnen Sie die Job History und filtern Sie nach "Errored", um genau zu sehen, welcher Lauf wann fehlgeschlagen ist. Erhöhen Sie in Schritt 2 des Job-Assistenten die Anzahl bei "Retry entire sync if fails" — der Standardwert 3 behebt die meisten vorübergehenden Netzwerkstörungen automatisch. Wenn dieselbe Datei weiterhin fehlschlägt, verwenden Sie in Schritt 3 eine benutzerdefinierte Filterregel, um sie vorübergehend auszuschließen, und bestätigen Sie, dass der Rest der Synchronisation sauber abgeschlossen wird.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Adjusting retry and advanced sync settings in RcloneView" class="img-large img-center" />

## Speicherkontingent erreicht

Wenn Uploads zu Koofr mitten in der Synchronisation ohne offensichtlichen Fehler stoppen, prüfen Sie, ob das Konto sein Speicherlimit erreicht hat. Koofr lehnt wie die meisten Anbieter neue Schreibvorgänge einfach ab, sobald das Kontingent voll ist.

**So beheben Sie es:**

Führen Sie `rclone about "koofr:"` im integrierten Rclone-Terminal-Tab aus, um die aktuelle Nutzung im Verhältnis zu Ihrem Kontingent zu prüfen. Wenn der Platz knapp wird, nutzen Sie die Werkzeuge zur Erkennung von Größenänderungen in Folder Compare, um die Ordner zu finden, die den meisten Speicherplatz beanspruchen, bevor Sie Platz freigeben oder Ihren Koofr-Plan upgraden.

## Dateien stimmen nach der Synchronisation nicht überein

Wenn Dateien scheinbar kopiert wurden, Koofr aber andere Größen oder Zeitstempel als die Quelle anzeigt, liegt dies meist an einem Problem mit der Sync-Richtung oder dem Timing, nicht an einem Koofr-spezifischen Fehler.

**So beheben Sie es:**

Führen Sie vor der eigentlichen Synchronisation einen Dry Run aus, um genau zu sehen, was kopiert oder gelöscht wird — so erkennen Sie Richtungsfehler, bevor sie Ihre Daten betreffen. Verwenden Sie anschließend Folder Compare zwischen der Quelle und dem Koofr-Remote, um zu bestätigen, dass beide Seiten übereinstimmen. Die Sync- und Folder-Compare-Werkzeuge von RcloneView sind beide mit der FREE-Lizenz verfügbar, sodass Sie Ergebnisse überprüfen können, ohne die App zu verlassen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing source and Koofr folders in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr Koofr-Remote erneut hinzu, wenn die Authentifizierung fehlschlägt, statt ein abgelaufenes zu bearbeiten.
3. Prüfen Sie die Job History auf den genauen Fehlerpunkt und passen Sie die Wiederholungs- oder Filtereinstellungen entsprechend an.
4. Führen Sie nach jeder Korrektur einen Dry Run und Folder Compare aus, um zu bestätigen, dass die Synchronisation künftig sauber läuft.

Eine kleine Diagnoseroutine — zuerst Job History, dann Dry Run, dann Compare — löst die meisten Koofr-Synchronisationsprobleme, ohne dass die Befehlszeile benötigt wird.

---

**Weiterführende Anleitungen:**

- [Koofr-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr als Multi-Cloud-Hub mit RcloneView](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Von Koofr zu Google Drive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)

<CloudSupportGrid />
