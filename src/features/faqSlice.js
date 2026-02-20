import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// THUNK FAQ
export const fetchFaqData = createAsyncThunk("faq/fetch", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    q: "How do I book a destination ticket?",
                    a: "It's very easy! Choose your desired destination, select the visit date and number of tickets, fill in the buyer details, and complete the payment. Your e-ticket will instantly appear on your Profile page."
                },
                {
                    q: "Can I book a ticket for the same day (Go-Show)?",
                    a: "Yes, as long as the ticket quota for the destination is still available. However, we highly recommend booking at least 1 day before your visit for a smoother trip."
                },
                {
                    q: "What payment methods are accepted?",
                    a: "We accept payments via Bank Transfer, Virtual Accounts (BCA, Mandiri, BNI), e-Wallets (GoPay, OVO, DANA), and Credit Cards."
                },
                {
                    q: "Can I cancel my booking or reschedule?",
                    a: "Rescheduling and refunds can be done up to 3 days before the visit date, depending on the policy of each tourist destination. Admin fees may apply."
                },
                {
                    q: "Do I need to print the E-ticket?",
                    a: "No need. You can simply show the E-ticket (Barcode/QR Code) directly from your smartphone screen to the staff at the destination entrance."
                }
            ]);
        }, 1000); // Delay 1 second
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

export default faqSlice.reducer;