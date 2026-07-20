---
slug: fix-mega-connection-quota-errors-rcloneview
title: "Mega-Verbindungs- und Kontingentfehler beheben — Lösung mit RcloneView"
authors:
  - tayson
description: "Beheben Sie Mega-Synchronisationsfehler in RcloneView, einschließlich Überschreitung des Kontingents, Verbindungsfehlern und Authentifizierungsproblemen. Schritt-für-Schritt-Fehlerbehebung für Probleme mit Mega-Cloud-Speicher."
keywords:
  - Mega-Verbindungsfehler
  - Mega-Kontingentüberschreitungsfehler
  - Mega-Synchronisation beheben
  - Mega RcloneView Fehlerbehebung
  - Mega-Kontingent überschritten
  - Mega-Authentifizierungsfehler
  - Mega-Cloud-Speicher beheben
  - RcloneView Mega-Fehler
  - Mega-Synchronisationsproblem
  - Cloud-Synchronisation Fehlerbehebung
tags:
  - RcloneView
  - mega
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mega-Verbindungs- und Kontingentfehler beheben — Lösung mit RcloneView

> Beheben Sie Fehler bei der Mega-Synchronisation in RcloneView — lösen Sie Kontingentüberschreitungen, Authentifizierungsprobleme und Verbindungs-Timeouts beim Synchronisieren oder Übertragen von Mega-Dateien.

Mega ist ein Cloud-Speicherdienst, der für seine Ende-zu-Ende-Verschlüsselung und die großzügige kostenlose Speicherstufe bekannt ist. Während es für den manuellen Dateizugriff gut funktioniert, kann die Synchronisation großer Datenmengen über Mega mit RcloneView bestimmte Fehlerbedingungen zutage fördern: Drosselung durch Kontingentüberschreitung, Authentifizierungsfehler nach Ablauf der Sitzung und Verbindungsunterbrechungen. Dieser Leitfaden behandelt die häufigsten Mega-Fehler, die in RcloneView auftreten, sowie die Schritte zu deren Behebung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mega-Kontingentüberschreitung (Bandbreitenlimit überschritten)

Mega setzt Download-Bandbreitenlimits — insbesondere bei kostenlosen Konten — und deren Überschreitung löst eine Drosselung aus, die sich als „Overquota"-Fehler oder drastisch reduzierte Übertragungsgeschwindigkeiten äußert. Wenn dies während eines Synchronisationsjobs in RcloneView auftritt, sehen Sie möglicherweise Fehler mit `EOVERQUOTA` oder ähnlichen Codes im Log-Tab.

**Sofortmaßnahmen:**
- **Warten Sie, bis sich das Kontingentfenster zurücksetzt.** Die Bandbreitenlimits von Mega setzen sich in einem gleitenden Zeitfenster zurück, typischerweise nach mehreren Stunden. Das Pausieren von Synchronisationen und ein späterer erneuter Versuch löst das Problem oft ohne weitere Änderungen.
- **Reduzieren Sie gleichzeitige Übertragungen.** Verringern Sie in den erweiterten Einstellungen des Synchronisationsjobs die Anzahl der Dateiübertragungen auf 1 oder 2. Weniger gleichzeitige Verbindungen reduzieren die Rate des Bandbreitenverbrauchs und helfen Ihnen, unter dem Kontingentschwellenwert zu bleiben.
- **Verwenden Sie den Filterschritt**, um jeden Synchronisationslauf auf eine Teilmenge von Dateien zu beschränken und große Einzellauf-Übertragungen zu vermeiden, die die Bandbreite schnell erschöpfen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Mega sync settings to avoid overquota errors in RcloneView" class="img-large img-center" />

## Authentifizierungs- und Anmeldefehler

Mega verwendet in rclone die Authentifizierung per E-Mail und Passwort. Authentifizierungsfehler äußern sich typischerweise als Anmeldefehler oder Meldungen über abgelaufene Sitzungen. Häufige Ursachen:

**Falsche Zugangsdaten:** Überprüfen Sie Ihre Mega-E-Mail-Adresse und Ihr Passwort im Remote Manager. Wenn Sie kürzlich Ihr Mega-Passwort geändert haben, bearbeiten Sie den Remote in RcloneView und aktualisieren Sie die Zugangsdaten. Navigieren Sie zu Remote-Tab > Remote Manager, wählen Sie Ihren Mega-Remote aus und klicken Sie auf Bearbeiten.

**Zwei-Faktor-Authentifizierung (2FA):** Wenn 2FA für Ihr Mega-Konto aktiviert ist, kann rclone Schwierigkeiten mit der standardmäßigen E-Mail-/Passwort-Anmeldung haben. Prüfen Sie in der Mega-Dokumentation, ob der API-Zugriff bei aktivierter 2FA ein spezielles Token oder eine App-Passwort-Konfiguration erfordert.

**Ablauf der Sitzung:** Lange laufende Synchronisationsvorgänge können ein Sitzungs-Token überdauern. Wenn ein Job mitten in der Ausführung mit einem Authentifizierungsfehler fehlschlägt, löst das erneute Bearbeiten des Remotes eine erneute Authentifizierung aus, und das Fortsetzen der Synchronisation behebt dies.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authenticating Mega remote in RcloneView" class="img-large img-center" />

## Verbindungs-Timeouts und unterbrochene Übertragungen

Mega-Verbindungen können bei großen Übertragungen aufgrund von Netzwerkinstabilität oder serverseitiger Ratenbegrenzung durch Mega Timeouts erleiden. Die Synchronisations-Engine von RcloneView wiederholt fehlgeschlagene Vorgänge automatisch (Standard: 3 Wiederholungen), sodass sich vorübergehende Fehler oft ohne Eingreifen erholen. Wenn ein Job nach allen Wiederholungsversuchen konsequent fehlschlägt, prüfen Sie den Log-Tab auf spezifische Fehlermeldungen.

Fügen Sie bei anhaltenden Timeout-Problemen die Flags `--timeout` und `--contimeout` über Einstellungen > Embedded Rclone > Global Rclone Flags hinzu, um die Verbindungs-Timeout-Werte zu verlängern. Dies gibt der API von Mega mehr Zeit zum Antworten, bevor rclone einen Fehler meldet.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Mega sync error logs and job history in RcloneView" class="img-large img-center" />

## Unterbrochene Mega-Synchronisationsjobs fortsetzen

Wenn eine große Mega-Synchronisation unterbrochen wird — sei es durch Kontingentüberschreitung, Timeout oder einen Systemschlaf — setzt das erneute Ausführen desselben Synchronisationsjobs in RcloneView dort fort, wo er aufgehört hat. Das inkrementelle Synchronisationsverhalten von Rclone vergleicht Quelle und Ziel und überträgt nur Dateien, die fehlen oder unterschiedlich sind, während alles bereits erfolgreich Übertragene übersprungen wird.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Aktivieren Sie das DEBUG-Logging (Einstellungen > Embedded Rclone > Log Level: DEBUG), um detaillierte Fehlerausgaben von Mega-Vorgängen zu erfassen.
3. Reduzieren Sie gleichzeitige Übertragungen in den erweiterten Einstellungen Ihres Synchronisationsjobs, wenn Kontingentüberschreitungsfehler auftreten.
4. Bearbeiten Sie den Mega-Remote im Remote Manager erneut, um die Zugangsdaten zu aktualisieren, wenn Authentifizierungsfehler weiterhin bestehen.

Das Verständnis der Bandbreiten- und Sitzungsbeschränkungen von Mega hilft Ihnen, Synchronisationsjobs so zu konfigurieren, dass sie zuverlässig abgeschlossen werden, ohne auf diese häufigen Fehlerbedingungen zu stoßen.

---

**Verwandte Anleitungen:**

- [Mega zu OneDrive sichern mit RcloneView](https://rcloneview.com/support/blog/backup-mega-to-onedrive-with-rcloneview)
- [Mega-Dateien mit RcloneView verschlüsseln und synchronisieren](https://rcloneview.com/support/blog/encrypt-sync-protect-mega-files-rcloneview)
- [Mega-zu-Google-Drive-Backup mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-mega-to-google-drive-backup)

<CloudSupportGrid />
