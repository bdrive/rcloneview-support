---
slug: migrate-box-to-pcloud-rcloneview
title: "Box zu pCloud migrieren — Dateien mit RcloneView übertragen"
authors:
  - jay
description: "Box mit RcloneView zu pCloud migrieren: beide Remotes verbinden, einen Dry Run ausführen, Cloud-zu-Cloud kopieren und das Ergebnis mit Folder Compare überprüfen."
keywords:
  - Box zu pCloud migrieren
  - Box zu pCloud Übertragung
  - Box-Dateien nach pCloud verschieben
  - Box pCloud Migration
  - RcloneView Cloud-zu-Cloud
  - Box zu pCloud Synchronisation
  - rclone GUI
  - Cloud-Migrationstool
  - Cloud-Übertragung überprüfen
  - Box Alternative Speicher
tags:
  - RcloneView
  - box
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box zu pCloud migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Ihre Box-Ordner in einem kontrollierten Durchlauf nach pCloud – mit einer Vorschau vor dem Kopieren und einem Vergleich danach.

Teams, die aus ihrem Box-Workspace herausgewachsen sind, oder Freiberufler, die ihren persönlichen Speicher selbst kontrollieren möchten, stehen oft vor derselben Aufgabe: Tausende Dateien in verschachtelten Projektordnern müssen unversehrt in ein neues Konto gelangen. Das Herunterladen und erneute Hochladen über den Browser ist langsam und fehleranfällig. RcloneView verbindet Box und pCloud nebeneinander und überträgt direkt zwischen beiden, sodass nichts auf Ihrer lokalen Festplatte zwischengespeichert werden muss.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box und pCloud als Remotes verbinden

Beide Dienste nutzen in RcloneView die browserbasierte OAuth-Anmeldung. Öffnen Sie **Remote > New Remote**, wählen Sie Box und bestätigen Sie den Zugriff im geöffneten Browserfenster. Wiederholen Sie dies für pCloud. Liegen Ihre Dateien in einem Box-Business-Konto, ist die Einstellung für den Enterprise-Subtyp (`box_sub_type = enterprise`) erforderlich; private Konten benötigen sie nicht.

RcloneView kann über 90 Anbieter in einem Fenster einbinden (mount) und synchronisieren, unter Windows, macOS und Linux. Beide Remotes erscheinen daher als Tabs im selben Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Box und pCloud als neue Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Beide Seiten vor dem Kopieren durchsehen

Öffnen Sie Box in einem Explorer-Panel und pCloud im anderen. Nutzen Sie den Folder Tree und Get Size, um die Datenmenge abzuschätzen, und entscheiden Sie, ob Sie alles oder nur eine Teilmenge migrieren. Das Ziehen zwischen zwei verschiedenen Remotes führt eine **Kopie** aus, sodass Ihre Box-Originale unangetastet bleiben, bis Sie sie außer Betrieb nehmen möchten.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box und pCloud nebeneinander geöffnet für eine Cloud-zu-Cloud-Übertragung" class="img-large img-center" />

## Einen Copy-Job mit Dry Run erstellen

Bei mehr als einer Handvoll Dateien erstellen Sie statt Ziehen besser einen Job. Legen Sie im Sync-Assistenten Box als Quelle und einen pCloud-Ordner als Ziel fest und wählen Sie dann den Jobtyp **Copy**, damit am Ziel nichts gelöscht wird. Aktivieren Sie in den erweiterten Einstellungen den Prüfsummenvergleich und halten Sie die Zahl der Equality Checker niedrig, falls Box zu drosseln beginnt. Im Filter können Sie mit Max file size oder Ausschlussregeln wie `.git/` nicht benötigte Dateien überspringen.

Führen Sie zuerst **Dry Run** aus. Er listet die Dateien auf, die kopiert und gelöscht würden, sodass eine falsche Ordnerwahl sichtbar wird, bevor Daten bewegt werden. Der vordefinierte Filter **Box Docs** kann cloudnative Dokumente von Box ausschließen, wenn Sie diese nicht mitkopieren möchten.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ausführen eines Box-zu-pCloud-Copy-Jobs in RcloneView" class="img-large img-center" />

## Mit Folder Compare überprüfen

Wenn der Job abgeschlossen ist, öffnen Sie **Compare** mit Box links und pCloud rechts. Filtern Sie nach Dateien, die nur links vorhanden sind, und nach abweichenden Dateien; alles, was noch aufgelistet wird, braucht einen weiteren Durchlauf. Der Job History protokolliert für jeden Lauf Status, Größe, Geschwindigkeit und Dateianzahl – nützlich als Nachweis, dass die Migration abgeschlossen wurde.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zeigt Unterschiede zwischen Box und pCloud" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Box und pCloud über **Remote > New Remote** hinzu und melden Sie sich per OAuth an.
3. Erstellen Sie einen Copy-Job von Box nach pCloud und führen Sie einen Dry Run aus.
4. Führen Sie den Job aus und bestätigen Sie das Ergebnis mit Folder Compare, bevor Sie Box aufräumen.

Eine schrittweise Migration mit Kopieren und anschließender Prüfung hält Ihre Box-Daten sicher, bis pCloud alles enthält, was Sie benötigen.

---

**Weiterführende Anleitungen:**

- [Box zu Backblaze B2 migrieren](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)
- [Box zu Google Drive migrieren](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [pCloud-Speicher verwalten](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
