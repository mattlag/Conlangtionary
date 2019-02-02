
export default class ChooserIPA {
	constructor() {

	}

	load() {
		let content = '<h1>Consonants (pulmonic)</h1>';
		content += consonantsPulmonic;
		content += '<br><br>';
		content += '<h1>Vowels</h1>';
		content += vowels;

		return content;
	}
}

let consonantsPulmonic = `
<table id="tableConsonantsPulmonic">
	<thead>
	<tr>
		<th></th>
		<th class="place" title="Bilabial">Bl</th>
		<th class="place" title="Labiodental">Ld</th>
		<th class="place" title="Dental">De</th>
		<th class="place" title="Alveolar">Al</th>
		<th class="place" title="Postalveolar">Pa</th>
		<th class="place" title="Retroflex">Re</th>
		<th class="place" title="Palatal">Pa</th>
		<th class="place" title="Velar">Ve</th>
		<th class="place" title="Uvular">Uv</th>
		<th class="place" title="Pharyngeal">Ph</th>
		<th class="place" title="Glottal">Gl</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<th class="manner">Plosive</th>
		<td>
			<span class="voiceless">p</span>
			<span class="voiced">b</span>
		</td>
		<td></td>
		<td></td>
		<td>
			<span class="voiceless">t</span>
			<span class="voiced">d</span>
		</td>
		<td></td>
		<td>
			<span class="voiceless">ʈ</span>
			<span class="voiced">ɖ</span>
		</td>
		<td>
			<span class="voiceless">c</span>
			<span class="voiced">ɟ</span>
		</td>
		<td>
			<span class="voiceless">k</span>
			<span class="voiced">ɡ</span>
		</td>
		<td>
			<span class="voiceless">q</span>
			<span class="voiced">ɢ</span>
		</td>
		<td>
			<span
			 class="voiceless"></span>
			<span class="voiced impossible">&nbsp;</span>
		</td>
		<td>
			<span class="voiceless">ʔ</span>
			<span class="voiced impossible">&nbsp;</span>
		</td>
	</tr>
	<tr>
		<th class="manner">Nasal</th>
		<td>
			<span class="voiced">m</span>
		</td>
		<td>
			<span class="voiced">ɱ</span>
		</td>
		<td></td>
		<td>
			<span class="voiced">n</span>
		</td>
		<td></td>
		<td>
			<span class="voiced">ɳ</span>
		</td>
		<td>
			<span class="voiced">ɲ</span>
		</td>
		<td>
			<span class="voiced">ŋ</span>
		</td>
		<td>
			<span class="voiced">ɴ</span>
		</td>
		<td class="impossible"></td>
		<td class="impossible"></td>
	</tr>
	<tr>
		<th class="manner">Trill</th>
		<td>
			<span class="voiced">ʙ</span>
		</td>
		<td></td>
		<td></td>
		<td>
			<span class="voiced">r</span>
		</td>
		<td></td>
		<td></td>
		<td></td>
		<td class="impossible"></td>
		<td>
			<span class="voiced">ʀ</span>
		</td>
		<td></td>
		<td class="impossible"></td>
	</tr>
	<tr>
		<th class="manner">Tap or Flap</th>
		<td></td>
		<td>
			<span class="voiced">ⱱ</span>
		</td>
		<td></td>
		<td>
			<span class="voiced">ɾ</span>
		</td>
		<td></td>
		<td>
			<span class="voiced">ɽ</span>

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
			<span class="voiceless">ɸ</span>
			<span class="voiced">β</span>
		</td>
		<td>
			<span class="voiceless">f</span>
			<span class="voiced">v</span>

		</td>
		<td>
			<span class="voiceless">θ</span>
			<span class="voiced">ð</span>
		</td>
		<td>
			<span class="voiceless">s</span>

			<span class="voiced">z</span>
		</td>
		<td>
			<span class="voiceless">ʃ</span>
			<span class="voiced">ʒ</span>
		</td>
		<td>
			<span class="voiceless">ʂ</span>
			<span class="voiced">ʐ</span>
		</td>
		<td>
			<span class="voiceless">ç</span>
			<span class="voiced">ʝ</span>
		</td>
		<td>
			<span class="voiceless">x</span>
			<span class="voiced">ɣ</span>
		</td>
		<td>
			<span class="voiceless">χ</span>
			<span class="voiced">ʁ</span>

		</td>
		<td>
			<span class="voiceless">ħ</span>
			<span class="voiced">ʕ</span>
		</td>
		<td>
			<span class="voiceless">h</span>
			<span class="voiced">ɦ</span>
		</td>
	</tr>
	<tr>
		<th class="manner">Lateral fricative</th>
		<td class="impossible"></td>
		<td class="impossible"></td>
		<td></td>
		<td>
			<span class="voiceless">ɬ</span>
			<span class="voiced">ɮ</span>
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
			<span class="voiced">ʋ</span>
		</td>
		<td></td>
		<td>
			<span class="voiced">ɹ</span>
		</td>
		<td></td>
		<td>
			<span class="voiced">ɻ</span>
		</td>
		<td>
			<span class="voiced">j</span>
		</td>
		<td>
			<span class="voiced">ɰ</span>
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
			<span class="voiced">l</span>
		</td>
		<td></td>
		<td>
			<span class="voiced">ɭ</span>
		</td>
		<td>
			<span class="voiced">ʎ</span>
		</td>
		<td>
			<span class="voiced">ʟ</span>
		</td>
		<td></td>
		<td class="impossible"></td>
		<td class="impossible"></td>
	</tr>
	</tbody>
</table>
`;

let vowels = `
<table id="tableVowels">
  <tr>
	<th></th>
	<th class="place" colspan="3">Front</th>
	<th></th>
	<th></th>
	<th></th>
	<th></th>
	<th class="place" colspan="3">Central</th>
	<th></th>
	<th></th>
	<th></th>
	<th class="place" colspan="2">Back</th>
  </tr>
  <tr>
	<th>Close</th>
	<td>i</td>
	<td>y</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>ɨ</td>
	<td>ʉ</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>ɯ</td>
	<td>u</td>
  </tr>
  <tr>
	<th></th>
	<td></td>
	<td></td>
	<td>ɪ</td>
	<td>ʏ</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>ʊ</td>
	<td></td>
	<td></td>
  </tr>
  <tr>
	<th>Close-mid</th>
	<td></td>
	<td></td>
	<td>e</td>
	<td>ø</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>ɘ</td>
	<td>ɵ</td>
	<td></td>
	<td></td>
	<td></td>
	<td>ɤ</td>
	<td>o</td>
  </tr>
  <tr>
	<th></th>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>ə</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
  </tr>
  <tr>
	<th>Open-mid</th>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>ɛ</td>
	<td>œ</td>
	<td></td>
	<td></td>
	<td></td>
	<td>ɜ</td>
	<td>ɞ</td>
	<td></td>
	<td></td>
	<td>ʌ</td>
	<td>ɔ</td>
  </tr>
  <tr>
	<th></th>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>æ</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>ɐ</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
  </tr>
  <tr>
	<th>Open</th>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>a</td>
	<td>ɶ</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>ɑ</td>
	<td>ɒ</td>
  </tr>
</table>
`;