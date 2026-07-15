#!/usr/bin/env python3
"""i18n 번역본 구조/YAML 검증 + 알려진 아티팩트 자동 교정.

번역 배치 후 검증 파이프라인의 1+2단계 (I18N_RUNBOOK_ko.md 참고):
  .venv/bin/python scripts/validate_i18n.py     # "문제 0건"이어야 통과
이후 3단계 `node scripts/mdx_check.mjs`, 4단계 전체 빌드로 이어진다.

자동 교정 (발견 즉시 파일 수정):
  - 에이전트가 실수로 붙인 `</content>` 닫는 태그 제거
  - de 로케일 frontmatter에서 „...“ 인용부호가 곧은따옴표(")로 닫혀
    YAML 문자열이 조기 종료되는 문제 교정

요구사항: PyYAML (python3 -m venv .venv && .venv/bin/pip install pyyaml)
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG = ROOT / "blog"
LOCALES = ["ko", "ja", "zh-Hans", "zh-Hant", "de", "es", "fr", "id"]

try:
    import yaml
except ImportError:
    sys.exit("PyYAML이 필요합니다: .venv/bin/pip install pyyaml")


def fix_artifacts(text: str, loc: str):
    """알려진 에이전트 산출 아티팩트를 교정. (교정된 텍스트, 교정 여부) 반환."""
    fixed = False
    if "</content>" in text:
        text = text.replace("</content>", "")
        fixed = True
    # 에이전트 도구 호출 문법 잔재 (</invoke>, <invoke ...>, </parameter> 등)
    # — 배치 7에서 발견된 변종. 해당 줄 전체를 제거한다.
    tool_artifact = re.compile(r"^[ \t]*</?(?:invoke|parameter|antml[\w:]*)[^>\n]*>[ \t]*\n?", re.M)
    if tool_artifact.search(text):
        text = tool_artifact.sub("", text)
        fixed = True
    if loc == "de":
        m = re.match(r"^---\n([\s\S]*?)\n---\n", text)
        if m:
            fm = m.group(1)
            fm2 = re.sub(r"„([^\"“\n]*)\"(?!\s*$)", r"„\1“", fm)
            if fm2 != fm:
                text = text[: m.start(1)] + fm2 + text[m.end(1):]
                fixed = True
    return text, fixed


def main() -> int:
    problems = []
    fixed_files = []
    checked = 0
    for loc in LOCALES:
        d = ROOT / "i18n" / loc / "docusaurus-plugin-content-blog"
        if not d.is_dir():
            continue
        for f in sorted(d.glob("*.md")):
            src = BLOG / f.name
            if not src.exists():
                continue
            checked += 1
            text = f.read_text(encoding="utf-8")
            text, was_fixed = fix_artifacts(text, loc)
            if was_fixed:
                f.write_text(text, encoding="utf-8")
                fixed_files.append(f"{loc}/{f.name}")
            orig = src.read_text(encoding="utf-8")

            issues = []
            if not text.startswith("---"):
                issues.append("frontmatter 누락")
            if orig.count("```") != text.count("```"):
                issues.append("코드블록 수 불일치")
            if ("<!-- truncate -->" in orig) != ("<!-- truncate -->" in text):
                issues.append("truncate 마커 불일치")
            if "from '../src/" in text or 'from "../src/' in text:
                issues.append("../src import 미변환")
            if "](/support/" in text:
                issues.append("/support/ 링크 잔존")

            m = re.match(r"^---\n([\s\S]*?)\n---\n", text)
            mo = re.match(r"^---\n([\s\S]*?)\n---\n", orig)
            if m and mo:
                try:
                    fm = yaml.safe_load(m.group(1))
                    fmo = yaml.safe_load(mo.group(1))
                    for k in ("slug", "date", "authors", "tags"):
                        if fmo and k in fmo and (not fm or fm.get(k) != fmo.get(k)):
                            issues.append(f"frontmatter {k} 변경됨")
                except yaml.YAMLError as e:
                    issues.append(f"YAML 오류: {str(e).splitlines()[0]}")
            elif not m:
                issues.append("frontmatter 파싱 불가")

            if issues:
                problems.append(f"{loc}/{f.name}: " + "; ".join(issues))

    print(f"검사 {checked}건 / 자동교정 {len(fixed_files)}건 / 문제 {len(problems)}건")
    for p in fixed_files:
        print("  교정:", p)
    for p in problems[:40]:
        print("  문제:", p)
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
