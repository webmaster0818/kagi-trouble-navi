import Link from "next/link";

// 情報の検証ポリシー欄。業者ページ共通。事実は各ページ内の一次確認記載に依拠し、ここでは方針のみを明文化する。
export default function VerificationNote({ officialUrl, officialLabel, checkedNote }: { officialUrl?: string; officialLabel?: string; checkedNote?: string }) {
  return (
    <section className="my-10 rounded-lg border border-emerald-200 bg-emerald-50/60 p-5">
      <h2 className="text-lg font-bold text-slate-900 mb-2">掲載情報の確認方法について</h2>
      <ul className="text-sm text-slate-700 space-y-1.5 list-disc pl-5">
        <li>運営会社・料金・サービス内容は、公式サイトおよび国税庁法人番号公表サイト等の公開情報で編集部が直接確認した内容のみを掲載しています{checkedNote ? `（${checkedNote}）` : ""}。</li>
        <li>体験談・口コミの創作は行いません。未検証の口コミは掲載しません（引用する場合は出典を明記のうえ、編集部による要約であることを明示します）。</li>
        <li>当サイト独自の星評価（AggregateRating）などの評価は、構造化データに付与していません。</li>
        <li>鍵業界には名称の似た別会社が多いため、当サイトでは運営会社（法人）単位で確認し、混同しやすい業者には注意書きを記載しています。</li>
      </ul>
      <p className="text-sm text-slate-700 mt-3">
        {officialUrl && (
          <>
            一次情報: <a href={officialUrl} target="_blank" rel="noopener nofollow" className="text-blue-700 underline">{officialLabel ?? "公式サイト"}</a>／
          </>
        )}
        方針の詳細: <Link href="/content-policy/" className="text-blue-700 underline">記事の制作ポリシー</Link>
      </p>
    </section>
  );
}
