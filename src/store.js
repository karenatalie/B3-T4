import {
	configureStore,
	createSlice,
	createAsyncThunk,
} from "@reduxjs/toolkit";
import taskReducer from "./features/taskSlice";

// TAMBAHKAN 'export' DI SINI
export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
	const response = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=5",
	);
	return response.json();
});

const dataSlice = createSlice({
	name: "posts",
	initialState: { items: [], status: "idle" },
	reducers: {
		// TAMBAHKAN 'export' juga jika kamu memanggilnya di App.js
		addManual: (state, action) => {
			state.items.unshift({ id: Date.now(), title: action.payload });
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = "success";
				state.items = action.payload;
			});
	},
});

// PASTIKAN BAGIAN INI JUGA ADA
export const { addManual } = dataSlice.actions;

// THUNK FAQ
export const fetchFaqData = createAsyncThunk("faq/fetch", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    q: "Bagaimana cara memesan tiket destinasi?",
                    a: "Sangat mudah! Pilih destinasi yang Anda inginkan, tentukan tanggal kunjungan dan jumlah tiket, isi data pemesan, lalu selesaikan pembayaran. E-tiket akan langsung muncul di halaman Profile Anda."
                },
                {
                    q: "Apakah saya bisa memesan tiket untuk hari yang sama (Go-Show)?",
                    a: "Bisa, selama kuota tiket di destinasi tersebut masih tersedia. Namun, kami sangat menyarankan Anda memesan minimal H-1 sebelum kunjungan agar perjalanan lebih tenang."
                },
                {
                    q: "Metode pembayaran apa saja yang diterima?",
                    a: "Kami menerima pembayaran melalui Transfer Bank, Virtual Account (BCA, Mandiri, BNI), e-Wallet (GoPay, OVO, DANA), dan Kartu Kredit."
                },
                {
                    q: "Apakah bisa membatalkan pesanan atau reschedule?",
                    a: "Reschedule dan refund bisa dilakukan maksimal H-3 sebelum tanggal kunjungan, bergantung pada kebijakan masing-masing destinasi wisata. Biaya admin mungkin berlaku."
                },
                {
                    q: "Apakah E-tiket harus dicetak (di-print)?",
                    a: "Tidak perlu. Anda cukup menunjukkan E-tiket berupa Barcode/QR Code langsung dari layar HP Anda ke petugas di pintu masuk destinasi."
                }
            ]);
        }, 1000); // Delay 1 detik seolah-olah loading dari internet
    });
});

// SLICE FAQ: Tempat menyimpan data FAQ
const faqSlice = createSlice({
    name: "faq",
    initialState: { data: [], status: "idle" },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFaqData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFaqData.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload;
            });
    },
});

export const store = configureStore({
	reducer: {
		booking: dataSlice.reducer,
		task: taskReducer,
		faq: faqSlice.reducer,
	},
});
