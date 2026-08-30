import os
import joblib
import numpy as np
import pandas as pd
from sklearn.datasets import load_breast_cancer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

def train():
    data = load_breast_cancer()
    X = pd.DataFrame(data.data, columns=data.feature_names)
    y = data.target

    # Note: 0 is Malignant, 1 is Benign in sklearn breast_cancer dataset.
    # Map to standard target: 1 = Malignant, 0 = Benign for intuitive output
    # target_names: ['malignant', 'benign'] -> 0: malignant, 1: benign
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

    rf = RandomForestClassifier(n_estimators=100, random_state=42)
    rf.fit(X_train, y_train)

    y_pred = rf.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    print(f"Random Forest Accuracy: {acc * 100:.2f}%")

    model_dir = os.path.dirname(os.path.abspath(__file__))
    model_path = os.path.join(model_dir, "breast_cancer_model.pkl")
    
    # Save model and metadata (feature names, target names)
    model_payload = {
        "model": rf,
        "feature_names": list(data.feature_names),
        "target_names": list(data.target_names) # ['malignant', 'benign']
    }
    joblib.dump(model_payload, model_path)
    print(f"Model saved successfully to {model_path}")

if __name__ == "__main__":
    train()
