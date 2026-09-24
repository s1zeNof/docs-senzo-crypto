'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  ArrowRight,
  Download,
  CheckCircle2,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { DocArticle, DOC_ARTICLES } from '../../data/docsData';
import { CodeBlock } from './CodeBlock';
import { Callout } from './Callout';

interface ArticleViewProps {
  article: DocArticle;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article }) => {
  const prevArticle = article.prevSlug ? DOC_ARTICLES[article.prevSlug] : null;
  const nextArticle = article.nextSlug ? DOC_ARTICLES[article.nextSlug] : null;

  return (
    <article className="space-y-8 animate-fade-in">
      {/* ── Breadcrumbs ────────────────────────────────────────── */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-500">
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Docs
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-gray-400">{article.section}</span>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-cyan-400 font-medium truncate">{article.title}</span>
      </nav>

      {/* ── Article Header & Meta ─────────────────────────────── */}
      <div className="space-y-4 border-b border-white/[0.08] pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-semibold text-cyan-300">
            {article.section}
          </span>
          <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-xs font-mono text-gray-300">
            {article.version}
          </span>
          {article.badge && (
            <span
              className={`rounded-md px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${
                article.badge === 'HOT'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                  : article.badge === 'NEW'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : article.badge === 'UPD'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              }`}
            >
              {article.badge}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
          {article.title}
        </h1>

        <p className="text-base text-gray-400 leading-relaxed max-w-3xl">
          {article.description}
        </p>

        {/* Metadata info strip: Date, reading time, updater */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-1">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-gray-500" />
            <span>Updated: <strong className="text-gray-300">{article.lastUpdated}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gray-500" />
            <span>~{article.readingTimeMinutes} min read</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-emerald-300 font-medium">Verified by Senzo Core</span>
          </div>
        </div>

        {/* UPD Highlight banner if exists */}
        {article.updateNote && (
          <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 p-3 text-xs text-amber-200/90 flex items-start gap-2.5">
            <Sparkles className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{article.updateNote}</span>
          </div>
        )}
      </div>

      {/* ── Lead Paragraph ────────────────────────────────────── */}
      <div className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
        {article.content.lead}
      </div>

      {/* ── Content Sections ──────────────────────────────────── */}
      <div className="space-y-10">
        {article.content.sections.map(section => (
          <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center group">
              <a href={`#${section.id}`} className="hover:text-cyan-400 transition-colors">
                {section.title}
              </a>
              <span className="opacity-0 group-hover:opacity-100 text-gray-500 ml-2 text-sm transition-opacity font-mono">
                #
              </span>
            </h2>

            {section.body.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Table if present */}
            {section.table && (
              <div className="overflow-x-auto my-4 rounded-2xl border border-white/10 bg-[#07090e]">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="border-b border-white/10 bg-white/[0.03] text-gray-400 font-semibold">
                    <tr>
                      {section.table.headers.map((h, i) => (
                        <th key={i} className="p-3.5">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.05] text-gray-300">
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className={`p-3.5 ${cIdx === 0 ? 'font-medium text-white' : ''}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Code Snippet if present */}
            {section.codeSnippet && (
              <CodeBlock
                code={section.codeSnippet.code}
                lang={section.codeSnippet.lang}
                filename={section.codeSnippet.filename}
              />
            )}

            {/* Downloads Cards if present */}
            {section.downloads && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
                {section.downloads.map((d, dIdx) => (
                  <div
                    key={dIdx}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-white">{d.title}</h4>
                        <span className="rounded bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                          {d.os.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{d.description}</p>
                    </div>

                    <a
                      href={d.url}
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 py-2.5 px-4 text-xs font-semibold transition-all hover:-translate-y-0.5 shadow-sm"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download {d.filename}</span>
                    </a>
                  </div>
                ))}
              </div>
            )}

            {/* Callout if present */}
            {section.callout && (
              <Callout type={section.callout.type} title={section.callout.title}>
                {section.callout.text}
              </Callout>
            )}
          </section>
        ))}
      </div>

      {/* ── Footer Navigation (Prev / Next) ───────────────────── */}
      <div className="border-t border-white/[0.08] pt-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              href={`/${prevArticle.slug}`}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all group"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                <ArrowLeft className="h-3.5 w-3.5" /> Previous Article
              </span>
              <span className="text-sm font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                {prevArticle.title}
              </span>
            </Link>
          ) : <div />}

          {nextArticle ? (
            <Link
              href={`/${nextArticle.slug}`}
              className="flex flex-col items-end text-right rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all group"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                Next Article <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                {nextArticle.title}
              </span>
            </Link>
          ) : <div />}
        </div>

        {/* Official Ecosystem Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500 pt-2">
          <span>Official documentation of the Senzo ecosystem.</span>
          <div className="flex items-center gap-3">
            <a
              href="https://senzolab.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cyan-400/80 hover:text-cyan-300 transition-colors font-medium"
            >
              <span>senzolab.xyz</span>
            </a>
            <span className="text-gray-700">&middot;</span>
            <a
              href="https://launch.senzolab.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-teal-400/80 hover:text-teal-300 transition-colors font-medium"
            >
              <span>launch.senzolab.xyz</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
