import { startWorker } from "@/lib/queue";

import handler, { createServerEntry } from "@tanstack/react-start/server-entry";

startWorker();

export default createServerEntry({
    fetch(request) {
        return handler.fetch(request);
    },
});
