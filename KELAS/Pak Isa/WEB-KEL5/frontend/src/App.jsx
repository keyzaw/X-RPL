import { useEffect, useMemo, useState } from 'react';
import {
  CalendarDays,
  CheckCircle2,
  CircleDot,
  Clock,
  ListTodo,
  Pencil,
  Plus,
  Search,
  Trash2,
  WifiOff,
} from 'lucide-react';
import './App.css';

const fallbackItems = [
  { id: 1, title: 'Presentasi Proyek Alpha', status: 'Selesai', date: '2026-06-01' },
  { id: 2, title: 'Analisis UI/UX', status: 'Dalam Proses', date: '2026-06-10' },
  { id: 3, title: 'Riset Pasar', status: 'Tertunda', date: '2026-06-15' },
];

const statusMeta = {
  Selesai: {
    className: 'done',
    icon: CheckCircle2,
  },
  'Dalam Proses': {
    className: 'progress',
    icon: CircleDot,
  },
  Tertunda: {
    className: 'waiting',
    icon: Clock,
  },
};

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiFallback, setApiFallback] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/items');

        if (!response.ok) {
          throw new Error('API Laravel belum siap');
        }

        const data = await response.json();
        setItems(data);
      } catch {
        setApiFallback(true);
        setItems(fallbackItems);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return items;
    }

    return items.filter((item) =>
      [item.title, item.status, item.date].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    );
  }, [items, query]);

  const completed = items.filter((item) => item.status === 'Selesai').length;
  const inProgress = items.filter((item) => item.status === 'Dalam Proses').length;
  const waiting = items.filter((item) => item.status === 'Tertunda').length;

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            <ListTodo size={22} strokeWidth={2.2} />
          </span>
          <div>
            <p className="eyebrow">Dashboard</p>
            <h1>Tugas Presentasi</h1>
          </div>
        </div>

        <button className="primary-action" type="button">
          <Plus size={18} aria-hidden="true" />
          <span>Tambah Tugas</span>
        </button>
      </header>

      {apiFallback && (
        <section className="api-note" aria-live="polite">
          <WifiOff size={18} aria-hidden="true" />
          <span>API Laravel belum aktif, jadi data contoh sedang ditampilkan.</span>
        </section>
      )}

      <section className="summary-grid" aria-label="Ringkasan tugas">
        <article className="summary-card">
          <p>Total Tugas</p>
          <strong>{items.length}</strong>
        </article>
        <article className="summary-card success">
          <p>Selesai</p>
          <strong>{completed}</strong>
        </article>
        <article className="summary-card info">
          <p>Dalam Proses</p>
          <strong>{inProgress}</strong>
        </article>
        <article className="summary-card warning">
          <p>Tertunda</p>
          <strong>{waiting}</strong>
        </article>
      </section>

      <section className="task-panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Daftar</p>
            <h2>Tugas Aktif</h2>
          </div>

          <label className="search-field">
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              placeholder="Cari tugas"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>

        <div className="task-list">
          {loading ? (
            <div className="loading-state">
              <span className="spinner" aria-hidden="true" />
              <p>Memuat data...</p>
            </div>
          ) : (
            filteredItems.map((item) => {
              const meta = statusMeta[item.status] ?? statusMeta.Tertunda;
              const StatusIcon = meta.icon;

              return (
                <article className="task-row" key={item.id}>
                  <div className="task-copy">
                    <h3>{item.title}</h3>
                    <span>
                      <CalendarDays size={15} aria-hidden="true" />
                      {item.date}
                    </span>
                  </div>

                  <span className={`status-pill ${meta.className}`}>
                    <StatusIcon size={15} aria-hidden="true" />
                    {item.status}
                  </span>

                  <div className="row-actions" aria-label={`Aksi untuk ${item.title}`}>
                    <button type="button" aria-label={`Edit ${item.title}`}>
                      <Pencil size={17} aria-hidden="true" />
                    </button>
                    <button className="danger" type="button" aria-label={`Hapus ${item.title}`}>
                      <Trash2 size={17} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })
          )}

          {!loading && filteredItems.length === 0 && (
            <div className="empty-state">
              <p>Tidak ada tugas yang cocok.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
