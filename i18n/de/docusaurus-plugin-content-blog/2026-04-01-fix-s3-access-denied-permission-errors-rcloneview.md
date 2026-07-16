---
slug: fix-s3-access-denied-permission-errors-rcloneview
title: "S3 Access Denied- und Berechtigungsfehler mit RcloneView beheben"
authors:
  - tayson
description: "Diagnostizieren und beheben Sie S3-Fehler wie 'Access Denied', 403 Forbidden und Anmeldedatenfehler in rclone und RcloneView. Behandelt IAM-Richtlinien, Bucket-Richtlinien, ACLs und die Konfiguration von Anmeldedaten."
keywords:
  - fix s3 access denied rclone
  - s3 403 forbidden rclone
  - rclone s3 permission error
  - aws s3 access denied rcloneview
  - iam policy s3 rclone
  - s3 bucket policy error
  - rclone aws credentials error
  - s3 acl permission denied
  - troubleshoot s3 rclone
  - fix s3 errors rcloneview
tags:
  - amazon-s3
  - aws-s3
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# S3 Access Denied- und Berechtigungsfehler mit RcloneView beheben

> "Access Denied" von einem S3-kompatiblen Speicheranbieter bedeutet fast immer eine fehlerhafte Berechtigungskonfiguration — nicht einen Fehler in der Software. Diese Anleitung führt Sie durch jede häufige Ursache und deren Lösung, von IAM-Richtlinien über Bucket-ACLs bis hin zu Tippfehlern in Anmeldedaten.

S3-Berechtigungsfehler sind frustrierend, weil sie oft undurchsichtig sind: Die API gibt `403 Access Denied` zurück, ohne zu erklären, welche spezifische Berechtigung fehlt. Das Problem kann an der IAM-Richtlinie, der Bucket-Richtlinie, der Bucket-ACL, der Objekt-ACL, den Verschlüsselungseinstellungen oder einfach an falschen Anmeldedaten liegen. RcloneView zeigt diese Fehler klar im Auftragsverlauf an — diese Anleitung hilft Ihnen, sie bis zur Ursache zurückzuverfolgen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Diagnose des Fehlers

Der erste Schritt ist, die genaue Fehlermeldung im Auftragsverlauf von RcloneView oder in der Terminalausgabe zu lesen:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="View S3 errors in RcloneView job history" class="img-large img-center" />

Häufige Fehlermuster und ihre Bedeutung:

| Fehlermeldung | Wahrscheinliche Ursache |
|--------------|-------------|
| `AccessDenied: Access Denied` | IAM-/Bucket-Richtlinie; falsche Anmeldedaten |
| `403 Forbidden` | Bucket-Richtlinie oder ACL-Blockierung |
| `NoCredentialProviders: no valid credentials` | Anmeldedaten nicht konfiguriert |
| `InvalidAccessKeyId` | Falscher Zugriffsschlüssel oder Tippfehler |
| `SignatureDoesNotMatch` | Falscher geheimer Schlüssel |
| `AllAccessDisabled: All access to this object has been disabled` | S3 Block Public Access-Einstellungen |
| `AccountProblem` | AWS-Kontoproblem (Abrechnung, Sperrung) |

## Lösung 1: Falsche oder fehlende Anmeldedaten

Die häufigste Ursache für `AccessDenied` sind schlicht falsche Anmeldedaten in der Remote-Konfiguration von RcloneView.

**Anmeldedaten überprüfen:**
1. Öffnen Sie **Remotes** in RcloneView.
2. Wählen Sie den S3-Remote aus und klicken Sie auf **Bearbeiten**.
3. Überprüfen Sie, ob **Access Key ID** und **Secret Access Key** genau mit denen in Ihrer AWS-IAM-Konsole (oder der entsprechenden Anbieterkonsole) übereinstimmen.
4. Fügen Sie die Schlüssel im Zweifelsfall erneut ein — unsichtbare Leerzeichen sind eine häufige Fehlerquelle.

Prüfen Sie bei Wasabi, IDrive e2 und anderen S3-kompatiblen Anbietern zusätzlich, ob die **Endpoint-URL** dem aktuellen Endpoint des Anbieters für Ihre Region entspricht.

## Lösung 2: Unzureichende IAM-Berechtigungen

Wenn die Anmeldedaten korrekt sind, fehlen dem IAM-Benutzer oder der Rolle wahrscheinlich die notwendigen S3-Berechtigungen.

**Mindestberechtigungen, damit RcloneView funktioniert:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetBucketLocation",
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:GetObjectAcl",
        "s3:PutObjectAcl"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

Weisen Sie diese Richtlinie dem IAM-Benutzer oder der Rolle zu, die RcloneView verwendet. Um alle Buckets aufzulisten, fügen Sie zusätzlich `s3:ListAllMyBuckets` für `Resource: "*"` hinzu.

<img src="/support/images/en/blog/new-remote.png" alt="Verify S3 credentials in RcloneView remote settings" class="img-large img-center" />

## Lösung 3: Bucket-Richtlinie blockiert den Zugriff

Eine Bucket-Richtlinie kann IAM-Berechtigungen überschreiben. Überprüfen Sie die Bucket-Richtlinie in der AWS-Konsole:

1. Navigieren Sie zu **S3 → Ihr Bucket → Permissions → Bucket Policy**.
2. Suchen Sie nach `Deny`-Anweisungen, die für Ihren IAM-Benutzer gelten könnten.
3. Überprüfen Sie außerdem die **Block Public Access**-Einstellungen — wenn Sie versuchen, öffentliche ACLs für Objekte festzulegen, blockieren diese Einstellungen dies.

Ein häufiger Fehler ist eine pauschale `Deny`-Anweisung, die versehentlich Ihren IAM-Benutzer blockiert:

```json
{
  "Effect": "Deny",
  "Principal": "*",
  "Action": "s3:*",
  "Condition": {
    "Bool": { "aws:SecureTransport": "false" }
  }
}
```

Dies ist eigentlich eine gültige Richtlinie zur HTTPS-Erzwingung — rclone verwendet standardmäßig HTTPS, sodass dies keine Probleme verursachen sollte, es sei denn, Sie haben explizit HTTP erzwungen.

## Lösung 4: Probleme mit objektbezogenen ACLs

Einige S3-Konfigurationen erzwingen, dass hochgeladene Objekte eine bestimmte ACL verwenden (`bucket-owner-full-control` bei kontoübergreifenden Konfigurationen). Wenn Sie in den Bucket eines anderen hochladen und dieser beim Lesen Ihrer Uploads `Access Denied` erhält:

Fügen Sie `--s3-acl bucket-owner-full-control` in das Feld **Custom flags** von RcloneView für den Auftrag ein.

## Lösung 5: Anforderungen an serverseitige Verschlüsselung (SSE)

Manche Buckets verlangen, dass Objekte mit einem bestimmten Verschlüsselungsschlüssel (SSE-KMS) hochgeladen werden. Ein Upload ohne diesen Schlüssel führt zu Access Denied.

In den benutzerdefinierten Flags des Auftrags in RcloneView:
```
--s3-sse aws:kms --s3-sse-kms-key-id arn:aws:kms:us-east-1:123456789:key/your-key-id
```

## Lösung 6: MFA Delete oder Object Lock

Wenn Object Lock oder MFA Delete für den Bucket aktiviert ist, werden bestimmte Vorgänge (Löschen, Überschreiben) ohne zusätzliche Authentifizierungsschritte blockiert. Bei reinen Lesevorgängen (Copy statt Sync) spielt dies keine Rolle. Für Sync-Aufträge, die verwaiste Dateien löschen müssen, benötigen Sie entweder:

- einen Benutzer mit erweiterten Berechtigungen und MFA, oder
- einen Auftragsmodus, der nicht löscht (Copy anstelle von Sync).

## Lösung 7: Regionskonflikt

Die Verbindung zu einem S3-Bucket in `us-west-2` über den `us-east-1`-Endpoint führt manchmal zu Access Denied. Stellen Sie sicher, dass der Endpoint oder die Region Ihres Remotes mit der tatsächlichen Region des Buckets übereinstimmt.

Bearbeiten Sie in RcloneView den Remote und setzen Sie die **Region** auf den korrekten Wert (z. B. `us-west-2`).

## Checkliste zusammengefasst

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Debug S3 issues systematically" class="img-large img-center" />

Arbeiten Sie diese Checkliste der Reihe nach ab:

1. ✅ Anmeldedaten (Access Key und Secret Key) sind korrekt und ohne Tippfehler kopiert
2. ✅ Der IAM-Benutzer/die Rolle hat ListBucket-, GetObject-, PutObject-Berechtigungen für den Bucket
3. ✅ Keine Deny-Anweisungen in der Bucket-Richtlinie betreffen diesen Benutzer
4. ✅ Die Block Public Access-Einstellungen verhindern nicht die beabsichtigten Vorgänge
5. ✅ Region/Endpoint stimmt mit der tatsächlichen Region des Buckets überein
6. ✅ Verschlüsselungsanforderungen (SSE-KMS) werden erfüllt, falls der Bucket sie verlangt
7. ✅ ACL-Anforderungen für kontoübergreifende Uploads werden erfüllt

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Prüfen Sie den Auftragsverlauf** auf die genaue Fehlermeldung.
3. **Ordnen Sie den Fehler** der passenden Lösung oben zu.
4. **Aktualisieren Sie Anmeldedaten oder IAM-Richtlinien** und führen Sie den Auftrag erneut aus.

S3-Berechtigungsfehler sind fast immer Konfigurationsprobleme, keine Programmfehler. Eine methodische Diagnose beseitigt sie schnell.

---

**Weiterführende Anleitungen:**

- [Google Drive API-Kontingentfehler beheben](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Unveränderliches S3 Object Lock-Backup](https://rcloneview.com/support/blog/immutable-s3-object-lock-rcloneview)
- [Rclone-Fehler beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
