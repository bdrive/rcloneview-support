---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "iCloud Drive zu pCloud migrieren — Dateien mit RcloneView übertragen"
authors:
  - jay
description: "Verschieben Sie Dateien mit RcloneView von iCloud Drive zu pCloud. Beide Clouds verbinden, die Kopie per Dry Run prüfen, direkt von Cloud zu Cloud übertragen und mit Folder Compare verifizieren."
keywords:
  - iCloud Drive zu pCloud migrieren
  - Übertragung iCloud Drive zu pCloud
  - Dateien aus iCloud Drive verschieben
  - iCloud Drive Migrationstool
  - pCloud Migration
  - Cloud-zu-Cloud-Übertragung
  - rcloneview icloud drive
  - rcloneview pcloud
  - rclone gui icloud drive
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Drive zu pCloud migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Ihre iCloud-Drive-Ordner mit einem Kopierjob nach pCloud, den Sie vorab prüfen, beobachten und verifizieren können – ohne vorher alles auf einer lokalen Festplatte zwischenzuspeichern.

Der Wechsel von iCloud Drive zu pCloud hat meist praktische Gründe: ein Haushalt mit gemischten Windows-, Linux- und Mac-Rechnern oder ein Freelancer, der ein einziges Speicherkonto möchte, das auf jedem Desktop gleich funktioniert. iCloud Drive hat keinen eingebauten Export zu einem anderen Cloud-Dienst, daher wird die Migration meist zu „erst alles auf einen Mac herunterladen, dann wieder hochladen“. RcloneView verbindet beide Dienste gleichzeitig und kopiert die Dateien über rclone, sodass die Übertragung aus einem Fenster direkt von Cloud zu Cloud läuft.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud Drive und pCloud als Remotes verbinden

Die Unterstützung für iCloud Drive erfordert rclone v1.69 oder neuer. RcloneView wird mit einer eingebetteten rclone-Binärdatei ausgeliefert, die diese Anforderung erfüllt, sodass Sie nichts zusätzlich installieren müssen. Öffnen Sie den Tab Remote, klicken Sie auf **New Remote**, wählen Sie iCloud Drive und geben Sie Ihre Apple-Zugangsdaten ein. Fügen Sie dann pCloud hinzu. Die Anmeldung erfolgt über einen OAuth-Login im Browser, Sie müssen also keine API-Schlüssel erzeugen.

Wenn beide Remotes verbunden sind, öffnen Sie zwei Explorer-Panels nebeneinander. Klicken Sie mit der rechten Maustaste auf einen Ordner der obersten Ebene in iCloud Drive und wählen Sie **Get Size**, um zu sehen, wie viele Daten Sie verschieben werden. Diese Zahl zeigt Ihnen, ob Ihr pCloud-Tarif genug Platz hat, bevor die erste Datei kopiert wird.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

## Einen Kopierjob erstellen und mit Dry Run prüfen

Für eine Migration ist ein **Copy**-Job die vorsichtige Wahl: Er fügt pCloud Dateien hinzu und löscht dort nie etwas. Wählen Sie **Sync** nur, wenn pCloud iCloud Drive exakt spiegeln muss, einschließlich Löschungen.

Erstellen Sie im Job Manager den Job mit einem iCloud-Drive-Ordner als Quelle und einem pCloud-Ordner als Ziel. Lassen Sie in Step 2 die Wiederholungseinstellung auf dem Standardwert 3, damit eine abgebrochene Verbindung den Lauf nicht beendet. In Step 3 können Sie Daten auslassen, die Sie nicht mehr brauchen. Eigene Filter können `.iso`-Images oder `.git/`-Ordner ausschließen, und ein maximales Dateialter lässt alten Ballast zurück.

Führen Sie vor der eigentlichen Übertragung einen **Dry Run** aus. Nehmen Sie eine Designerin, die 300 GB Kundenprojekte umzieht: Der Dry Run listet jede Datei auf, die kopiert würde, sodass sie die Ordnerstruktur prüfen kann, bevor sie Stunden in die Übertragung investiert.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from iCloud Drive to pCloud in RcloneView" class="img-large img-center" />

## Die Übertragung starten und den Fortschritt verfolgen

Starten Sie den Job und beobachten Sie den Tab Transferring, der Fortschritt, Geschwindigkeit und Dateianzahl anzeigt. Bei einer großen Bibliothek erstellen Sie einen Job pro Ordner der obersten Ebene (Documents, Desktop, Projektordner). Schlägt ein Stapel fehl, führen Sie nur diesen erneut aus. Jeder Lauf wird in Job History mit Status, Gesamtgröße und Dateianzahl protokolliert, sodass Sie festhalten, was wann übertragen wurde.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed iCloud Drive to pCloud copy runs" class="img-large img-center" />

## Das Ergebnis mit Folder Compare prüfen

Klicken Sie auf **Compare** und öffnen Sie links den iCloud-Drive-Ordner und rechts den pCloud-Ordner. Filtern Sie nach Dateien, die nur links vorhanden sind oder abweichen, um Übersprungenes zu finden, und senden Sie die fehlenden Dateien dann mit **Copy right** hinüber. Sobald beide Seiten als gleich angezeigt werden, können Sie den alten Speicher beruhigt aufgeben.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing iCloud Drive and pCloud folders after migration" class="img-large img-center" />

## Erste Schritte

RcloneView bindet über 90 Anbieter aus einem Fenster ein (mount) und synchronisiert sie – unter Windows, macOS und Linux.

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie iCloud Drive (das eingebettete rclone v1.69+ ist enthalten) und pCloud über dessen OAuth-Login hinzu.
3. Erstellen Sie einen Copy-Job von iCloud Drive zu pCloud und prüfen Sie ihn mit Dry Run.
4. Führen Sie den Job aus und bestätigen Sie das Ergebnis mit Folder Compare, bevor Sie Ihren iCloud-Tarif verkleinern.

Eine verifizierte Migration Ordner für Ordner bringt Ihre Dateien nach pCloud, wobei jeder Ordner nachweisbar übertragen wurde.

---

**Weiterführende Anleitungen:**

- [iCloud Drive Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [pCloud Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [iCloud Drive zu Dropbox migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-icloud-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
