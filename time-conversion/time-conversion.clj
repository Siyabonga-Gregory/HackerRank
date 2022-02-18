(defn format-hh [unformatted-hh, ss-with-period]
  (let [is-pm? (str/includes? ss-with-period "PM")
        period-conversion (if is-pm? (+ 12 (read-string unformatted-hh)) unformatted-hh)]
    (case period-conversion
      24 "12"
      "12" "00"
      period-conversion)))

(defn timeConversion [s]
  (let [[unformatted-hh mm ss-with-period] (str/split s #"\:")
        hh (format-hh unformatted-hh ss-with-period)
        ss (subs ss-with-period 0 2)]
    (str/join [hh ":" mm ":" ss])))