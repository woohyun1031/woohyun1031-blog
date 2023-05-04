export default function getAnnotations({
  bold,
  italic,
  strikethrough,
  underline,
  code,
}: {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
}) {
  if (code)
    return 'px-1 py-0.5 rounded text-code bg-default-light dark:bg-default-dark transition-colors';
  if (bold) return 'font-bold';
  if (italic) return 'italic';
  if (strikethrough) return 'line-through';
  if (underline) return 'underline';
  return '';
}
