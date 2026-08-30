import sys
import os
import json
import warnings
warnings.filterwarnings("ignore")
import joblib
import numpy as np
import pandas as pd


def main():
    try:
        # Load Model
        model_dir = os.path.dirname(os.path.abspath(__file__))
        model_path = os.path.join(model_dir, "breast_cancer_model.pkl")
        
        if not os.path.exists(model_path):
            print(json.dumps({"error": "Model file breast_cancer_model.pkl not found"}))
            sys.exit(1)

        payload = joblib.load(model_path)
        
        # Unpack model payload
        if isinstance(payload, dict) and "model" in payload:
            model = payload["model"]
            target_names = payload.get("target_names", ["malignant", "benign"])
        else:
            model = payload
            target_names = ["malignant", "benign"]

        # Parse Input
        raw_input = ""
        if len(sys.argv) > 1:
            raw_input = sys.argv[1]
        else:
            raw_input = sys.stdin.read().strip()

        if not raw_input:
            print(json.dumps({"error": "No feature data provided"}))
            sys.exit(1)

        parsed = json.loads(raw_input)

        if isinstance(parsed, dict) and "features" in parsed:
            features = parsed["features"]
        elif isinstance(parsed, list):
            features = parsed
        else:
            features = list(parsed.values())

        if len(features) != 30:
            print(json.dumps({"error": f"Expected 30 features, got {len(features)}"}))
            sys.exit(1)

        features_array = np.array(features, dtype=float).reshape(1, -1)

        # Inference
        pred_idx = int(model.predict(features_array)[0])
        probas = model.predict_proba(features_array)[0]

        # target_names: 0 -> malignant, 1 -> benign
        prob_malignant = float(probas[0])
        prob_benign = float(probas[1])

        prediction_label = "Malignant" if pred_idx == 0 else "Benign"

        result = {
            "prediction": prediction_label,
            "confidence": {
                "Benign": round(prob_benign, 4),
                "Malignant": round(prob_malignant, 4)
            }
        }

        print(json.dumps(result))

    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)

if __name__ == "__main__":
    main()
