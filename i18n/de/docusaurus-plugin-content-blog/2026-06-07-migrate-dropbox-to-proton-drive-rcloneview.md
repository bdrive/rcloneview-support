---
slug: migrate-dropbox-to-proton-drive-rcloneview
title: "Dropbox zu Proton Drive migrieren — Dateien übertragen mit RcloneView"
authors:
  - jay
description: "Verschieben Sie Ihre Dropbox-Dateien zu Proton Drive für Ende-zu-Ende-verschlüsselten Speicher. Erfahren Sie, wie Sie mit RcloneView in wenigen einfachen Schritten Cloud-zu-Cloud migrieren."
keywords:
  - migrate Dropbox to Proton Drive
  - Dropbox to Proton Drive transfer
  - cloud-to-cloud migration RcloneView
  - Proton Drive backup
  - Dropbox migration privacy
  - move files Dropbox Proton Drive
  - encrypted cloud storage migration
  - RcloneView cloud transfer guide
  - switch from Dropbox to Proton Drive
  - Proton Drive sync RcloneView
tags:
  - RcloneView
  - dropbox
  - proton-drive
  - migration
  - cloud-to-cloud
  - privacy
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox zu Proton Drive migrieren — Dateien übertragen mit RcloneView

> Mit RcloneView übertragen Sie Ihre gesamte Dropbox-Bibliothek direkt Cloud-zu-Cloud zu Proton Drive — ohne lokale Downloads, ohne manuelles erneutes Hochladen und ohne Kommandozeile.

Für viele Teams hängt die Entscheidung, Dropbox zu verlassen, mit dem Datenschutz zusammen. Dropbox speichert Dateien im Klartext auf seinen Servern, was bedeutet, dass Dropbox-Mitarbeiter und Behörden mit einem entsprechenden Beschluss auf Ihre Daten zugreifen können. Proton Drive, entwickelt vom Team hinter ProtonMail, verschlüsselt Dateien clientseitig, bevor sie die Server von Proton erreichen — nicht einmal Proton kann Ihre Inhalte lesen. RcloneView vereinfacht diese Migration, indem es sich gleichzeitig mit beiden Diensten verbindet und Daten direkt Cloud-zu-Cloud verschiebt, wobei Ordnerstruktur und Dateiintegrität durchgehend erhalten bleiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox und Proton Drive als Remotes hinzufügen

Bevor Sie Dateien übertragen, fügen Sie beide Cloud-Konten in RcloneView hinzu. Gehen Sie zu **Remote-Tab > Neuer Remote** und wählen Sie **Dropbox**. RcloneView öffnet ein Browserfenster für die OAuth-Authentifizierung — melden Sie sich bei Dropbox an und erteilen Sie den Zugriff. Der Remote wird nach der Autorisierung automatisch gespeichert.

Wiederholen Sie den Vorgang für Proton Drive: Wählen Sie **Proton Drive** aus der Remote-Liste, geben Sie Ihre Proton-E-Mail-Adresse und Ihr Passwort ein. Falls Sie die Zwei-Faktor-Authentifizierung aktiviert haben, geben Sie den Code bei Aufforderung ein. Die eingebettete rclone-Binärdatei von RcloneView unterstützt Proton Drive nativ (erfordert rclone v1.69+, das mitgeliefert wird). Sobald beide Remotes hinzugefügt sind, erscheinen sie als Tabs im zweigeteilten Datei-Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## Die Migration mit Ordnervergleich planen

Bevor Sie etwas übertragen, verwenden Sie das Tool **Ordnervergleich** von RcloneView, um zu bewerten, was sich in Dropbox befindet und was bereits in Proton Drive vorhanden ist. Klicken Sie auf die Schaltfläche **Vergleichen** im Home-Tab, legen Sie Dropbox als linke Quelle und Proton Drive als rechte fest. Die Vergleichsansicht hebt Dateien hervor, die nur in Dropbox existieren (nur links), Dateien, die auf beiden Seiten übereinstimmen, sowie Größenunterschiede — Sie erhalten so ein klares Bild davon, was tatsächlich verschoben werden muss.

Dieser Schritt ist besonders nützlich, wenn Sie bereits manuell einige Dateien zu Proton Drive kopiert haben und doppelte Arbeit vermeiden möchten. Filtern Sie nach "nur links", um nur das zu sehen, was in Proton Drive fehlt, und kopieren Sie dann genau diese Elemente.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer setup from Dropbox to Proton Drive in RcloneView" class="img-large img-center" />

## Die Cloud-zu-Cloud-Übertragung ausführen

Für eine vollständige Migration verwenden Sie den **Sync**-Assistenten. Klicken Sie im Home-Tab auf **Sync**, legen Sie Dropbox als Quelle und Proton Drive als Ziel fest und benennen Sie den Job (z. B. `dropbox-proton-migration`). Wählen Sie **Kopieren** als Jobtyp, um die Originale in Dropbox zu erhalten, während die Proton-Drive-Kopie erstellt wird — so bleibt Ihre Dropbox intakt, bis Sie die Migration überprüft haben.

Aktivieren Sie in Schritt 2 des Assistenten die **Prüfsummenverifizierung**, um zu bestätigen, dass jede Datei unversehrt ankommt. Dies ist entscheidend für sensible Dokumente, bei denen die Datenintegrität garantiert sein muss. Führen Sie zunächst einen **Probelauf** durch, um vor der Ausführung eine Vorschau der zu übertragenden Dateien zu erhalten, und starten Sie dann den eigentlichen Job.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using folder compare to verify Dropbox files before migration to Proton Drive" class="img-large img-center" />

## Fortschritt überwachen und Abschluss überprüfen

Während die Übertragung läuft, zeigt der Tab **Übertragung** am unteren Rand von RcloneView die aktuelle Übertragungsgeschwindigkeit, die Dateianzahl und den Prozentsatz des Fortschritts in Echtzeit an. Große Dropbox-Bibliotheken — zum Beispiel die 50.000 Mandantendokumente einer Anwaltskanzlei — können mehrere Stunden dauern; der Job läuft im Hintergrund weiter, während RcloneView in die Systemablage minimiert wird.

Sobald der Job abgeschlossen ist, führen Sie den Ordnervergleich erneut aus, um zu bestätigen, dass keine "nur links"-Dateien mehr vorhanden sind. Jedes Element, das in Dropbox weiterhin als "nur links" markiert ist, weist auf eine fehlgeschlagene Übertragung hin, die selektiv erneut ausgeführt werden kann. Der **Job-Verlauf** von RcloneView protokolliert den gesamten Durchlauf mit Startzeit, Gesamtbytes, Geschwindigkeit und Status — eine dauerhafte Aufzeichnung, die sich für Compliance- oder IT-Audits eignet.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Dropbox to Proton Drive migration job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Dropbox über OAuth und Proton Drive über E-Mail/Passwort in **Remote-Tab > Neuer Remote** hinzu.
3. Verwenden Sie **Ordnervergleich**, um die Unterschiede zwischen den beiden Konten vor der Übertragung zu prüfen.
4. Erstellen Sie einen Kopier-Sync-Job mit Prüfsummenverifizierung und führen Sie ihn aus, um die Migration abzuschließen.

Mit beiden in RcloneView verbundenen Remotes wird das Verschieben Ihrer Daten von Dropbox zu Proton Drive zu einem visuellen, überschaubaren Vorgang — ohne Skripte, ohne zwischengeschaltete Downloads und mit einem durchgehend klaren Prüfpfad.

---

**Verwandte Anleitungen:**

- [Dropbox-Cloud-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Proton-Drive-Cloud-Synchronisation mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Dropbox zu Wasabi migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />
