export const statsValues = {
    netValue: { 
        value: "£563,350", title: "Your net worth as of today" 
    },
    cashFlow: { 
        value: "£12,430", title: "Monthly Cashflow"
    },
    liability: { 
        value: "£161,430", title: "Overall Liabilities"
    }

}

export const status = {
    "Expense" : "red",
    "Net Worth" : "blue"
}

export const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
]

export const monthWisePerfomance = {
    "JAN" : "23%",
    "FEB" : "43%",
    "MAR" : "56%",
    "APR" : "21%",
    "MAY" : "39%",
    "JUN" : "65%",
    "JUL" : "89%",
    "AUG" : "78%",
    "SEP" : "81%",
    "OCT" : "90%",
    "NOV" : "89%",
    "DEC" : "69%"
}

export function random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + "," + 0.9 + ")";
}

export const statusColor = {
    confirm: "green",
    hold: "gray",
    cancel: "red"
};

export const datasetKeyProvider = () => {
    return btoa(Math.random()).substring(0, 12);
};