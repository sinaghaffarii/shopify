export default function ProductResultsCount({ count }: { count: number }) {
  return <p className="text-sm text-muted-foreground">{new Intl.NumberFormat('fa-IR').format(count)} محصول یافت شد</p>;
}
