---
slug: fix-cloud-sync-encoding-unicode-errors-rcloneview
title: "Kodierungs- und Unicode-Dateinamenfehler bei der Cloud-Synchronisation in RcloneView beheben"
authors:
  - tayson
description: "Kodierungs- und Unicode-Dateinamenfehler bei der Cloud-Synchronisation in RcloneView beheben und beseitigen. Beheben Sie Zeichen-Inkompatibilitäten zwischen Anbietern."
keywords:
  - rcloneview
  - unicode filename error
  - cloud sync encoding error
  - special characters cloud sync
  - filename encoding fix
  - rclone encoding
  - cloud file name error
  - unicode cloud transfer
  - character encoding fix
  - cross-platform filename issues
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kodierungs- und Unicode-Dateinamenfehler bei der Cloud-Synchronisation in RcloneView beheben

> Verschiedene Cloud-Anbieter und Betriebssysteme behandeln Dateinamen unterschiedlich. Unicode-Zeichen, Sonderzeichen und Kodierungs-Konflikte führen zu Fehlern bei der Synchronisation — hier erfahren Sie, wie Sie diese in RcloneView diagnostizieren und beheben.

Eine Datei namens `résumé_2026.pdf` auf Google Drive lässt sich möglicherweise nicht mit OneDrive for Business synchronisieren. Ein Ordner mit japanischen Zeichen auf einem lokalen NAS wird eventuell nicht zu S3 übertragen. Ein Dateiname mit `#`, `%` oder `:` funktioniert vielleicht bei Dropbox, wird aber von SharePoint abgelehnt. Diese Kodierungs- und Zeichenkompatibilitätsprobleme gehören zu den frustrierendsten Problemen bei der Cloud-Synchronisation, da sie Dateien stillschweigend überspringen oder Fehler erzeugen, die schwer zu interpretieren sind.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Häufige Symptome

- **Fehler „Ungültiger Dateiname" oder „Nicht unterstütztes Zeichen"**: Der Ziel-Anbieter lehnt Dateinamen ab, die nicht unterstützte Zeichen enthalten.
- **Dateien werden bei der Synchronisation stillschweigend übersprungen**: Die Übertragung wird „erfolgreich" abgeschlossen, aber einige Dateien fehlen am Ziel. Diese Dateien enthalten typischerweise problematische Zeichen in ihren Namen.
- **Verstümmelte Dateinamen am Ziel**: Dateien kommen an, aber ihre Namen enthalten `%xx`-Escape-Sequenzen, Ersatzzeichen (`?`) oder Mojibake (fehlerhafte Zeichendarstellung).
- **Fehler „Pfad zu lang"**: Kodierte Dateinamen werden länger als das Pfadlängenlimit des Ziels (z. B. 400 Zeichen bei SharePoint, 1024 bei S3).
- **Doppelte Dateien mit ähnlichen Namen**: Zwei Dateien, die identisch aussehen (z. B. `café` mit komponiertem vs. dekomponiertem Unicode), werden als unterschiedliche Dateien behandelt.

## Das Problem verstehen

### Zeichenbeschränkungen der Anbieter

Jeder Cloud-Anbieter hat unterschiedliche Regeln für zulässige Zeichen in Dateinamen:

| Anbieter | Eingeschränkte Zeichen |
|---|---|
| OneDrive Business | `" * : < > ? / \ \|` und `#` `%` in manchen Kontexten |
| SharePoint | `" * : < > ? / \ \| #` `%` `~` sowie führende/nachgestellte Leerzeichen |
| Google Drive | Nur `/` und Null-Bytes eingeschränkt |
| Dropbox | `/` und Null-Bytes; nachgestellte Leerzeichen und Punkte unter Windows |
| AWS S3 | Fast keine Einschränkungen (jede UTF-8-Byte-Sequenz) |
| Lokales Dateisystem (Windows) | `" * : < > ? / \ \|` und reservierte Namen (CON, PRN, usw.) |

Bei der Synchronisation von einem permissiven Anbieter (Google Drive, S3) zu einem restriktiveren (OneDrive Business, SharePoint) schlagen Dateien mit eingeschränkten Zeichen fehl, sofern sie nicht kodiert werden.

### Unicode-Normalisierung

Unicode bietet mehrere Möglichkeiten, dasselbe Zeichen darzustellen. Zum Beispiel kann `é` sein:
- **NFC (komponiert)**: Ein einzelner Codepunkt U+00E9
- **NFD (dekomponiert)**: Zwei Codepunkte U+0065 + U+0301

macOS verwendet typischerweise NFD, während Windows und Linux NFC verwenden. Google Drive behält die ursprüngliche Kodierung bei, während OneDrive auf NFC normalisiert. Das bedeutet, dass eine auf macOS erstellte und zu Google Drive hochgeladene Datei beim Vergleich möglicherweise nicht mit derselben Datei auf OneDrive übereinstimmt — obwohl der Dateiname für Menschen identisch aussieht.

## Fix 1: Automatische Zeichenkodierung aktivieren

RcloneView (über rclone) kodiert eingeschränkte Zeichen automatisch bei der Übertragung zwischen Anbietern. Standardmäßig verfügt jeder Remote-Typ über eine Kodierungsvoreinstellung, die seine spezifischen Einschränkungen behandelt. Beim Kopieren zu OneDrive werden beispielsweise Zeichen wie `"`, `*` und `:` automatisch durch ähnlich aussehende, aber zulässige Unicode-Äquivalente ersetzt.

Wenn Sie trotzdem Kodierungsfehler sehen, überprüfen Sie, ob die Kodierung nicht deaktiviert ist. Prüfen Sie in der Remote-Konfiguration, dass der Parameter `encoding` auf seinen Standardwert gesetzt ist (setzen Sie ihn nicht auf `None`). Sie können dies im Remote-Manager von RcloneView anzeigen und ändern.

## Fix 2: Unicode-Normalisierung behandeln

Wenn Sie zwischen Dateien mit macOS-Ursprung und Windows-basierten Cloud-Anbietern synchronisieren, können Unterschiede in der Unicode-Normalisierung falsch-positive Ergebnisse beim Vergleich (Dateien erscheinen als unterschiedlich, obwohl sie es nicht sind) oder doppelte Dateien am Ziel verursachen.

Verwenden Sie das Flag `--no-unicode-normalization` in den benutzerdefinierten Flags von RcloneView, wenn Sie die exakte Byte-Sequenz der Dateinamen beibehalten möchten. Alternativ normalisieren die meisten Cloud-Anbieter Dateinamen serverseitig, und das Standardverhalten von rclone behandelt dies in den häufigsten Fällen korrekt.

Bei anhaltenden Problemen kann das Flag `--fix-case` helfen, wenn Unterschiede bei der Groß-/Kleinschreibung zwischen Anbietern Probleme verursachen (z. B. ist S3 case-sensitive; das lokale Windows-Dateisystem ist es nicht).

## Fix 3: Problematische Dateien umbenennen

Bei einer kleinen Anzahl von Dateien mit problematischen Zeichen ist die einfachste Lösung, sie an der Quelle umzubenennen. Verwenden Sie den Explorer von RcloneView, um Dateien mit Sonderzeichen zu identifizieren und sie direkt umzubenennen. Häufige Zeichen, die bei allen Anbietern vermieden werden sollten:

- `# % & { } \ < > * ? / $ ! ' " : @ + \`` \| =`
- Führende oder nachgestellte Leerzeichen und Punkte
- Reservierte Windows-Namen (CON, PRN, AUX, NUL, COM1-9, LPT1-9)

## Fix 4: Filterregeln verwenden, um problematische Dateien zu überspringen

Wenn Sie Dateien nicht umbenennen können (z. B. weil sie sich auf einem freigegebenen Laufwerk befinden, das Sie nicht kontrollieren), verwenden Sie Filterregeln, um Dateien mit bestimmten Zeichenmustern von der Synchronisation auszuschließen. Dies ist eher ein Workaround als eine echte Lösung, verhindert aber, dass die Synchronisation bei problematischen Dateien fehlschlägt oder stockt.

Fügen Sie in der Job-Konfiguration von RcloneView Filterregeln hinzu, wie zum Beispiel:
- `--exclude "**/*#*"`, um Dateien mit `#` zu überspringen
- `--exclude "**/*%*"`, um Dateien mit `%` zu überspringen

Überprüfen Sie anschließend die Synchronisationsprotokolle, um festzustellen, welche Dateien übersprungen wurden, und behandeln Sie diese bei Bedarf manuell.

## Fix 5: Pfadlängenlimits prüfen

Wenn Dateinamen kodiert werden, werden sie länger (jedes eingeschränkte Zeichen wird durch eine mehrere Bytes umfassende Unicode-Sequenz ersetzt). Liegt der Quellpfad bereits nahe am Limit des Ziels, überschreitet die Kodierung dieses Limit.

SharePoint hat ein Pfadlimit von 400 Zeichen. Windows hat standardmäßig ein Limit von 260 Zeichen (konfigurierbar). S3 hat ein Schlüssellimit von 1024 Zeichen.

Wenn Fehler wegen zu langer Pfade auftreten, kürzen Sie Ordnernamen in der Quellhierarchie oder vereinfachen Sie tief verschachtelte Strukturen. Der Explorer von RcloneView zeigt den vollständigen Pfad an, sodass sich tief verschachtelte Dateien leicht identifizieren lassen.

## Zukünftige Probleme vermeiden

- **Dateinamen vor dem Upload standardisieren**: Vermeiden Sie von Anfang an Sonderzeichen in Dateinamen. Beschränken Sie sich auf alphanumerische Zeichen, Bindestriche, Unterstriche und Punkte.
- **Mit Trockenlauf testen**: Verwenden Sie vor großen Synchronisationen zwischen Anbietern mit unterschiedlichen Zeichenregeln den Trockenlauf-Modus von RcloneView, um potenzielle Kodierungsprobleme zu identifizieren, ohne Daten zu übertragen.
- **Synchronisationsprotokolle überprüfen**: Prüfen Sie nach jeder Synchronisation den Job-Verlauf auf Warnungen zu übersprungenen oder umbenannten Dateien. Beheben Sie diese proaktiv, bevor sie sich häufen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Überprüfen Sie, dass Ihre Remote-Konfigurationen die Standard-Kodierungseinstellungen verwenden.
3. Verwenden Sie den Trockenlauf, um Kodierungsprobleme zu identifizieren, bevor Sie eine Übertragung durchführen.
4. Benennen oder filtern Sie problematische Dateien nach Bedarf.

Kodierungs- und Unicode-Probleme sind subtil, aber häufig bei der Synchronisation zwischen Anbietern. Die automatische Kodierung von RcloneView bewältigt die meisten Fälle, und die oben beschriebenen Schritte zur Fehlerbehebung lösen den Rest.

---

**Verwandte Anleitungen:**

- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Verlauf](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
