import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DOC_ARTICLES } from '../../data/docsData';
import { ArticleView } from '../../components/docs/ArticleView';
import { DocsTableOfContents } from '../../components/layout/DocsTableOfContents';

interface DocPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  return Object.keys(DOC_ARTICLES).map(key => ({
    slug: key.split('/'),
  }));
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const key = slug.join('/');
  const article = DOC_ARTICLES[key];

  if (!article) {
    return {
      title: 'Article Not Found | Senzo Docs',
    };
  }

  return {
    title: `${article.title} | Senzo Docs`,
    description: article.description,
  };
}

export default async function DocArticlePage({ params }: DocPageProps) {
  const { slug } = await params;
  const key = slug.join('/');
  const article = DOC_ARTICLES[key];

  if (!article) {
    notFound();
  }

  const tocItems = article.content.sections.map(s => ({
    id: s.id,
    title: s.title,
  }));

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_240px] gap-10">
      {/* Article Content */}
      <div className="min-w-0">
        <ArticleView article={article} />
      </div>

      {/* Right Table of Contents (Sticky) */}
      <div className="hidden xl:block">
        <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <DocsTableOfContents items={tocItems} />
        </div>
      </div>
    </div>
  );
}
