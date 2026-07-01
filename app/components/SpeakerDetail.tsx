/**
 * Renders a speaker (or team) bio body. The inner HTML was captured verbatim
 * from the original static page by scripts/parse-speakers.mjs, preserving inline
 * links and exact wording; only internal *.html links were rewritten to clean
 * routes. Wrapped in the original <section class="speaker-detail container">.
 */
export default function SpeakerDetail({ html }: { html: string }) {
  return (
    <section
      className="speaker-detail container"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
