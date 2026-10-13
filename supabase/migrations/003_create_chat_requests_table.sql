-- Used by the chat-completion edge function for per-user rate limiting.
-- RLS is on with no policies: the app (anon key) cannot read or write it,
-- only the edge function (service role) can.

CREATE TABLE IF NOT EXISTS public.chat_requests (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS chat_requests_user_created_idx
    ON public.chat_requests (user_id, created_at);

ALTER TABLE public.chat_requests ENABLE ROW LEVEL SECURITY;
