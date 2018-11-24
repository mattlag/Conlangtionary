let pulmonicConsonants = `
<table>
    <thead>
    <tr>
        <td></td>
        <th class="place">Bilabial</th>
        <th class="place">Labiodental</th>
        <th class="place">Dental</th>
        <th class="place">Alveolar</th>
        <th class="place">Postalveolar</th>
        <th class="place">Retroflex</th>
        <th class="place">Palatal</th>
        <th class="place">Velar</th>
        <th class="place">Uvular</th>
        <th class="place">Pharyngeal</th>
        <th class="place">Glottal</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th class="manner">Plosive</th>
        <td>
            <span title="U+0070: LATIN SMALL LETTER P" class="voiceless">p</span>
            <span title="U+0062: LATIN SMALL LETTER B" class="voiced">b</span>
        </td>
        <td></td>
        <td></td>
        <td>
            <span title="U+0074: LATIN SMALL LETTER T" class="voiceless">t</span>
            <span title="U+0064: LATIN SMALL LETTER D" class="voiced">d</span>
        </td>
        <td></td>
        <td>
            <span title="U+0288: LATIN SMALL LETTER T WITH RETROFLEX HOOK" class="voiceless">ʈ</span>
            <span title="U+0256: LATIN SMALL LETTER D WITH TAIL" class="voiced">ɖ</span>
        </td>
        <td>
            <span title="U+0063: LATIN SMALL LETTER C" class="voiceless">c</span>
            <span title="U+025F: LATIN SMALL LETTER DOTLESS J WITH STROKE" class="voiced">ɟ</span>
        </td>
        <td>
            <span title="U+006B: LATIN SMALL LETTER K" class="voiceless">k</span>
            <span title="U+0261: LATIN SMALL LETTER SCRIPT G" class="voiced">ɡ</span>
        </td>
        <td>
            <span title="U+0071: LATIN SMALL LETTER Q" class="voiceless">q</span>
            <span title="U+0262: LATIN LETTER SMALL CAPITAL G" class="voiced">ɢ</span>
        </td>
        <td>
            <span class="voiceless"></span>
            <span class="voiced impossible">&nbsp;</span>
        </td>
        <td>
            <span title="U+0294: LATIN LETTER GLOTTAL STOP" class="voiceless">ʔ</span>
            <span class="voiced impossible">&nbsp;</span>
        </td>
    </tr>
    <tr>
        <th class="manner">Nasal</th>
        <td>
            <span title="U+006D: LATIN SMALL LETTER M" class="voiced">m</span>
        </td>
        <td>
            <span title="U+0271: LATIN SMALL LETTER M WITH HOOK" class="voiced">ɱ</span>
        </td>
        <td></td>
        <td>
            <span title="U+006E: LATIN SMALL LETTER N" class="voiced">n</span>
        </td>
        <td></td>
        <td>
            <span title="U+0273: LATIN SMALL LETTER N WITH RETROFLEX HOOK" class="voiced">ɳ</span>
        </td>
        <td>
            <span title="U+0272: LATIN SMALL LETTER N WITH LEFT HOOK" class="voiced">ɲ</span>
        </td>
        <td>
            <span title="U+014B: LATIN SMALL LETTER ENG" class="voiced">ŋ</span>
        </td>
        <td>
            <span title="U+0274: LATIN LETTER SMALL CAPITAL N" class="voiced">ɴ</span>
        </td>
        <td class="impossible"></td>
        <td class="impossible"></td>
    </tr>
    <tr>
        <th class="manner">Trill</th>
        <td>
            <span title="U+0299: LATIN LETTER SMALL CAPITAL B" class="voiced">ʙ</span>
        </td>
        <td></td>
        <td></td>
        <td>
            <span title="U+0072: LATIN SMALL LETTER R" class="voiced">r</span>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td class="impossible"></td>
        <td>
            <span title="U+0280: LATIN LETTER SMALL CAPITAL R" class="voiced">ʀ</span>
        </td>
        <td></td>
        <td class="impossible"></td>
    </tr>
    <tr>
        <th class="manner">Tap or Flap</th>
        <td></td>
        <td>
            <span title="U+F25F: LATIN SMALL LETTER V WITH RIGHT HOOK" class="voiced"></span>
        </td>
        <td></td>
        <td>
            <span title="U+027E: LATIN SMALL LETTER R WITH FISHHOOK" class="voiced">ɾ</span>
        </td>
        <td></td>
        <td>
            <span title="U+027D: LATIN SMALL LETTER R WITH TAIL" class="voiced">ɽ</span>

        </td>
        <td></td>
        <td class="impossible"></td>
        <td></td>
        <td></td>
        <td class="impossible"></td>
    </tr>
    <tr>
        <th class="manner">Fricative</th>
        <td>
            <span title="U+0278: LATIN SMALL LETTER PHI" class="voiceless">ɸ</span>
            <span title="U+03B2: GREEK SMALL LETTER BETA" class="voiced">β</span>
        </td>
        <td>
            <span title="U+0066: LATIN SMALL LETTER F" class="voiceless">f</span>
            <span title="U+0076: LATIN SMALL LETTER V" class="voiced">v</span>

        </td>
        <td>
            <span title="U+03B8: GREEK SMALL LETTER THETA" class="voiceless">θ</span>
            <span title="U+00F0: LATIN SMALL LETTER ETH" class="voiced">ð</span>
        </td>
        <td>
            <span title="U+0073: LATIN SMALL LETTER S" class="voiceless">s</span>

            <span title="U+007A: LATIN SMALL LETTER Z" class="voiced">z</span>
        </td>
        <td>
            <span title="U+0283: LATIN SMALL LETTER ESH" class="voiceless">ʃ</span>
            <span title="U+0292: LATIN SMALL LETTER EZH" class="voiced">ʒ</span>
        </td>
        <td>
            <span title="U+0282: LATIN SMALL LETTER S WITH HOOK" class="voiceless">ʂ</span>
            <span title="U+0290: LATIN SMALL LETTER Z WITH RETROFLEX HOOK" class="voiced">ʐ</span>
        </td>
        <td>
            <span title="U+00E7: LATIN SMALL LETTER C WITH CEDILLA" class="voiceless">ç</span>
            <span title="U+029D: LATIN SMALL LETTER J WITH CROSSED-TAIL" class="voiced">ʝ</span>
        </td>
        <td>
            <span title="U+0078: LATIN SMALL LETTER X" class="voiceless">x</span>
            <span title="U+0263: LATIN SMALL LETTER GAMMA" class="voiced">ɣ</span>
        </td>
        <td>
            <span title="U+03C7: GREEK SMALL LETTER CHI" class="voiceless">χ</span>
            <span title="U+0281: LATIN LETTER SMALL CAPITAL INVERTED R" class="voiced">ʁ</span>

        </td>
        <td>
            <span title="U+0127: LATIN SMALL LETTER H WITH STROKE" class="voiceless">ħ</span>
            <span title="U+0295: LATIN LETTER PHARYNGEAL VOICED FRICATIVE" class="voiced">ʕ</span>
        </td>
        <td>
            <span title="U+0068: LATIN SMALL LETTER H" class="voiceless">h</span>
            <span title="U+0266: LATIN SMALL LETTER H WITH HOOK" class="voiced">ɦ</span>
        </td>
    </tr>
    <tr>
        <th class="manner">Lateral fricative</th>
        <td class="impossible"></td>
        <td class="impossible"></td>
        <td></td>
        <td>
            <span title="U+026C: LATIN SMALL LETTER L WITH BELT" class="voiceless">ɬ</span>
            <span title="U+026E: LATIN SMALL LETTER LEZH" class="voiced">ɮ</span>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

        <td></td>
        <td class="impossible"></td>
        <td class="impossible"></td>
    </tr>
    <tr>
        <th class="manner">Approximant</th>
        <td></td>
        <td>
            <span title="U+028B: LATIN SMALL LETTER V WITH HOOK" class="voiced">ʋ</span>
        </td>
        <td></td>
        <td>
            <span title="U+0279: LATIN SMALL LETTER TURNED R" class="voiced">ɹ</span>
        </td>
        <td></td>
        <td>
            <span title="U+027B: LATIN SMALL LETTER TURNED R WITH HOOK" class="voiced">ɻ</span>
        </td>
        <td>
            <span title="U+006A: LATIN SMALL LETTER J" class="voiced">j</span>
        </td>
        <td>
            <span title="U+0270: LATIN SMALL LETTER TURNED M WITH LONG LEG" class="voiced">ɰ</span>
        </td>
        <td></td>
        <td></td>
        <td class="impossible"></td>				
    </tr>
    <tr>
        <th class="manner">Lateral approximant</th>
        <td class="impossible"></td>
        <td class="impossible"></td>
        <td></td>
        <td>
            <span title="U+006C: LATIN SMALL LETTER L" class="voiced">l</span>
        </td>
        <td></td>
        <td>
            <span title="U+026D: LATIN SMALL LETTER L WITH RETROFLEX HOOK" class="voiced">ɭ</span>
        </td>
        <td>
            <span title="U+028E: LATIN SMALL LETTER TURNED Y" class="voiced">ʎ</span>
        </td>
        <td>
            <span title="U+029F: LATIN LETTER SMALL CAPITAL L" class="voiced">ʟ</span>
        </td>
        <td></td>
        <td class="impossible"></td>
        <td class="impossible"></td>
    </tr>
    </tbody>
</table>
`;