---
slug: fix-onedrive-sync-errors-delta-token-path-length-rcloneview
title: "OneDrive-Synchronisierungsfehler beheben: Abgelaufenes Delta-Token, zu langer Pfad und Authentifizierungsfehler"
authors:
  - tayson
description: "Lösen Sie häufige OneDrive-Synchronisierungsfehler mit rclone und RcloneView — abgelaufenes Delta-Token, Windows-Pfadlängenbeschränkungen, Authentifizierungsfehler und überschrittene Kontingente."
keywords:
  - fix onedrive sync errors rclone
  - onedrive delta token expired rclone
  - onedrive path too long sync error
  - rclone onedrive authentication error
  - onedrive sync failed rcloneview
  - onedrive quota exceeded rclone
  - troubleshoot onedrive rclone
  - onedrive sync troubleshooting
  - rcloneview onedrive errors
  - onedrive 400 bad request rclone
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive-Synchronisierungsfehler beheben: Abgelaufenes Delta-Token, zu langer Pfad und Authentifizierungsfehler

> OneDrive ist eine leistungsfähige Cloud-Speicher-Plattform, aber ihr Synchronisationsverhalten hat einige Eigenheiten, die rclone-Nutzern Probleme bereiten können. Dieser Leitfaden behandelt die häufigsten OneDrive-Fehler, die Ihnen in RcloneView begegnen, und zeigt, wie Sie jeden davon beheben.

OneDrive funktioniert für die überwiegende Mehrheit der rclone-Operationen gut, aber bestimmte Fehlerbedingungen sind spezifisch für Microsofts Plattform. Ablaufende Delta-Token, Windows-Pfadlängenbeschränkungen, fehlgeschlagene Aktualisierungen von Authentifizierungs-Token sowie Upload-Kontingente pro Datei oder pro Tag treten in der Praxis regelmäßig auf. Hier ist eine systematische Anleitung zur Diagnose und Behebung jedes einzelnen Problems.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Fehler 1: Abgelaufenes Delta-Token

**Symptom:** Sie sehen einen Fehler wie:
```
Failed to sync: invalidDeltaToken: The token is expired.
```

**Ursache:** Rclone verwendet ein Delta-Token, um inkrementelle Änderungen in OneDrive zu verfolgen. Dieses Token hat eine Gültigkeitsdauer von etwa 30 Tagen. Wenn Sie seit über einem Monat keine Synchronisation mehr ausgeführt haben — oder wenn Microsoft das Token invalidiert hat — kann rclone den inkrementellen Scan nicht fortsetzen.

**Lösung:** Erzwingen Sie einen vollständigen erneuten Scan, indem Sie das zwischengespeicherte Delta-Token entfernen:

1. Öffnen Sie in RcloneView das **Terminal**-Panel.
2. Führen Sie aus: `rclone backend remove-expiry onedrive:` (ersetzen Sie `onedrive` durch den Namen Ihres Remotes).
3. Alternativ löschen Sie den `vfs/delta`-Cache-Eintrag für das Remote in der Konfiguration von RcloneView.
4. Führen Sie den Synchronisationsjob erneut aus — rclone führt diesmal einen vollständigen Scan durch.

Dies dauert beim ersten Durchlauf nach der Behebung länger, löst den Fehler aber vollständig.

## Fehler 2: Pfad zu lang (> 400 Zeichen)

**Symptom:**
```
ERROR: path too long: cannot handle path > 400 characters
```
oder Dateien, die aus tief verschachtelten Ordnern nicht synchronisiert werden können.

**Ursache:** OneDrive erzwingt eine maximale Pfadlänge von 400 Zeichen (für OneDrive Personal) beziehungsweise 400 Zeichen für OneDrive for Business. Windows hat zudem eine ältere MAX_PATH-Beschränkung von 260 Zeichen, die den OneDrive-Desktop-Sync-Client betrifft, obwohl rclone selbst diese Windows-Beschränkung nicht hat.

**Lösung:**
- **Verkürzen Sie Ihre Ordnerstruktur** — halten Sie die Verzeichnisverschachtelung flach. Benennen Sie lange Ordnernamen um.
- **Verwenden Sie einen kürzeren Basispfad in OneDrive** — wenn Sie zu `OneDrive/Clients/Projects/2026/Active/Reports/` synchronisieren, erwägen Sie eine Vereinfachung zu `OneDrive/Projects-2026/Reports/`.
- **Nutzen Sie die Filterregeln von RcloneView**, um Ordner mit bekannten Pfadlängenproblemen zu überspringen, während Sie diese neu strukturieren.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Use folder comparison to identify path issues" class="img-large img-center" />

## Fehler 3: Authentifizierungsfehler (401 Unauthorized)

**Symptom:**
```
401 Unauthorized
Failed to refresh token
AADSTS700082: The refresh token has expired
```

**Ursache:** Die OAuth-Refresh-Token von Microsoft laufen ab, wenn sie 90 Tage lang nicht verwendet wurden oder nach einer Passwortänderung bzw. einem Sicherheitsrichtlinien-Reset. Wenn das in der rclone-Konfiguration gespeicherte Token ungültig wird, schlagen alle Operationen fehl.

**Lösung:** Autorisieren Sie das OneDrive-Remote in RcloneView erneut:

1. Öffnen Sie **Remotes** in RcloneView.
2. Wählen Sie Ihr OneDrive-Remote aus und klicken Sie auf **Bearbeiten**.
3. Klicken Sie auf **Erneut autorisieren** — ein Browserfenster für die Microsoft-Anmeldung öffnet sich.
4. Melden Sie sich an und gewähren Sie erneut Zugriff.
5. Speichern Sie das aktualisierte Token.

Zukünftige Operationen verwenden das neue Token. Richten Sie eine Erinnerung zur erneuten Autorisierung ein, wenn Sie selten Synchronisationsjobs ausführen (monatlich oder seltener).

## Fehler 4: 429 Too Many Requests / Ratenbegrenzung

**Symptom:**
```
429 Too Many Requests: request throttled
```

**Ursache:** Die OneDrive-API erzwingt pro Nutzer Ratenbegrenzungen. Das schnelle Synchronisieren tausender kleiner Dateien löst eine Drosselung aus.

**Lösung:**

- **Reduzieren Sie gleichzeitige Übertragungen** — verringern Sie in den Job-Einstellungen von RcloneView die Anzahl der Übertragungen auf 2–4.
- **Fügen Sie eine Ratenbegrenzung hinzu** — verwenden Sie das Flag `--tpslimit 10` im Feld für benutzerdefinierte Flags in RcloneView, um Transaktionen pro Sekunde zu begrenzen.
- **Planen Sie Jobs außerhalb der Stoßzeiten** — die Drosselung durch Microsoft ist während der Geschäftszeiten aggressiver.
- **Verwenden Sie Chunk-Uploads für große Dateien** — RcloneView übernimmt dies automatisch für Dateien über 100 MB.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive jobs during off-peak hours" class="img-large img-center" />

## Fehler 5: Kontingent überschritten

**Symptom:**
```
403 Forbidden: insufficient storage
```
oder Uploads, die stillschweigend fehlschlagen, wenn OneDrive nahezu voll ist.

**Ursache:** Das Ziel-OneDrive-Konto hat nicht genügend freien Speicherplatz.

**Lösung:**
- Überprüfen Sie Ihr OneDrive-Kontingent im Microsoft-365-Admin-Center oder unter onedrive.live.com.
- **Schaffen Sie Speicherplatz**, indem Sie alte Dateien aus OneDrive löschen oder verschieben.
- **Erweitern Sie Ihren Plan**, wenn das Konto tatsächlich voll ist.
- **Teilen Sie die Migration auf** — verschieben Sie Dateien in ein anderes OneDrive-Konto oder wechseln Sie für den Überlauf zu einem anderen Ziel.

## Fehler 6: Ungültige Zeichen in Dateinamen

**Symptom:** Dateien mit bestimmten Zeichen lassen sich nicht zu OneDrive übertragen.

**Ursache:** OneDrive verbietet bestimmte Zeichen in Dateinamen: `\`, `/`, `:`, `*`, `?`, `"`, `<`, `>`, `|`. Dateien von Linux-Systemen enthalten in ihren Namen häufig Doppelpunkte oder andere solche Zeichen.

**Lösung:** RcloneView (über rclone) verfügt über eine integrierte Kodierungsoption `--onedrive-enc`, die verbotene Zeichen automatisch durch Unicode-Ähnlichkeitszeichen ersetzt. Aktivieren Sie diese in den erweiterten Einstellungen für Ihr OneDrive-Remote.

## Fehler in RcloneView überwachen

Das **Job History**-Panel in RcloneView zeigt Übertragungsprotokolle mit vollständigen Fehlermeldungen für jede Datei:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="View OneDrive error logs in RcloneView" class="img-large img-center" />

Damit können Sie schnell feststellen, welche Dateien fehlgeschlagen sind und warum, ohne sich durch die rohe Log-Ausgabe von rclone zu wühlen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Prüfen Sie den Job-Verlauf** auf Fehlermeldungen, wenn eine Synchronisation fehlschlägt.
3. **Wenden Sie die Lösung** für den jeweiligen Fehlertyp gemäß der obigen Anleitung an.
4. **Führen Sie den Job erneut aus** — rclone überspringt bereits erfolgreich übertragene Dateien und wiederholt nur die fehlgeschlagenen.

Die meisten OneDrive-Fehler lassen sich unkompliziert beheben. Entscheidend ist, die genaue Fehlermeldung zu identifizieren und die gezielte Lösung anzuwenden, statt blind zu debuggen.

---

**Verwandte Anleitungen:**

- [Google Drive 403-Ratenbegrenzungsfehler beheben](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Rclone-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Cloud-Synchronisationskonflikte lösen](https://rcloneview.com/support/blog/resolve-cloud-sync-conflicts-rcloneview)

<CloudSupportGrid />
