(defn birthdayCakeCandles [candle-heights]
  (let [max-height (apply max candle-heights)
        tallest-candles
        (filter (fn [candle-height] (= candle-height max-height)) candle-heights)]
    (count tallest-candles)))