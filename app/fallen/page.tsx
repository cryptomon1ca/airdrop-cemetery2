import Link from 'next/link'
import { fallenCatalogMeta, fallenCategories, fallenSummary, featuredFallenProjects, rootdataDetailUrls } from '@/data/fallenCatalog'

export default function FallenDirectory() {
  return <main style={{ minHeight: '100vh', background: '#eee9d8', color: '#000' }}>
    <header style={{ background: '#FFD700', borderBottom: '4px solid #000', padding: '24px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: 12, textDecoration: 'underline' }}>← 返回空投墓地</Link>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 20, marginTop: 28 }}>
          <div><div style={{ fontSize: 10, fontWeight: 900, letterSpacing: '.14em', color: '#8b0000' }}>FALLEN PROJECT DIRECTORY</div><h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px, 7vw, 78px)', lineHeight: .95 }}>{fallenCatalogMeta.title}</h1></div>
          <div style={{ background: '#000', color: '#FFD700', border: '3px solid #000', padding: '10px 18px', minWidth: 120 }}><div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, lineHeight: 1 }}>{fallenCatalogMeta.reportedTotal}</div><div style={{ fontSize: 9, color: '#aaa', fontWeight: 800 }}>RootData 条目</div></div>
        </div>
        <p style={{ maxWidth: 800, fontSize: 13, lineHeight: 1.7, color: '#444', margin: '16px 0 0' }}>收录 2026 年 RootData 标记为已阵亡、停止运营或长期失活的项目。已核对链接的红色项目可直接查看 RootData 详情。</p>
      </div>
    </header>
    <section style={{ maxWidth: 1320, margin: '0 auto', padding: '28px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 14 }}>
        {fallenCategories.map(category => <article key={category.id} style={{ background: '#fff', border: '3px solid #000', boxShadow: '4px 4px 0 #000' }}>
          <div style={{ background: category.color, color: '#fff', borderBottom: '3px solid #000', padding: '9px 12px', display: 'flex', justifyContent: 'space-between' }}><h2 style={{ fontSize: 13, fontWeight: 900 }}>{category.label}</h2><strong style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 25 }}>{category.count}<small style={{ fontFamily: 'DM Sans', fontSize: 9, marginLeft: 4, opacity: .75 }}>/{category.sourceCount}</small></strong></div>
          <div style={{ padding: 12, display: 'flex', flexWrap: 'wrap', gap: 5 }}>{category.projects.map((project, i) => { const featured = featuredFallenProjects.has(project); const chip = <span style={{ border: '1.5px solid #000', background: featured ? '#ffd6d6' : '#f4f1e7', color: featured ? '#b40000' : '#000', padding: '3px 6px', fontSize: 10, fontWeight: 800 }}>{featured && '★ '}{project}</span>; return <span key={`${category.id}-${project}-${i}`}>{featured && rootdataDetailUrls[project] ? <a href={rootdataDetailUrls[project]} target="_blank" rel="noreferrer" title="打开 RootData 项目详情" style={{ textDecoration: 'none' }}>{chip}</a> : chip}</span> })}{category.projects.length < category.count && <span style={{ border: '1.5px dashed #777', padding: '3px 6px', fontSize: 10, color: '#666', fontWeight: 700 }}>另有 {category.count - category.projects.length} 个待复核名称</span>}</div>
          {category.note && <div style={{ borderTop: '1px solid #bbb', padding: '9px 12px', fontSize: 10, color: '#555', lineHeight: 1.5 }}>{category.note}</div>}
        </article>)}
      </div>
      <p style={{ margin: '12px 2px 0', fontSize: 10, color: '#666' }}>★ 红色项目：曾经具有较高市场热度或较强行业辨识度；带链接的项目可打开 RootData 详情页。</p>
      <div style={{ marginTop: 18, border: '3px solid #000', background: '#FFD700', padding: 14, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}><div><div style={{ fontSize: 10, fontWeight: 900, letterSpacing: '.12em', color: '#8b0000', marginBottom: 8 }}>名录说明</div>{fallenSummary.map(item => <p key={item} style={{ fontSize: 12, lineHeight: 1.65, marginBottom: 6 }}>— {item}</p>)}</div><div style={{ fontSize: 10, lineHeight: 1.6, color: '#555' }}><div><strong>来源：</strong><a href={fallenCatalogMeta.sourceUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>RootData</a></div><div><strong>口径：</strong>{fallenCatalogMeta.scope}</div><div><strong>最后复核：</strong>{fallenCatalogMeta.checkedAt}</div></div></div>
    </section>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;700;800;900&display=swap'); *{box-sizing:border-box} @media(max-width:640px){header>div>div{align-items:flex-start!important;flex-direction:column}.catalog-summary{grid-template-columns:1fr!important}}`}</style>
  </main>
}
