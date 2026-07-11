import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

type QuickCompany = {
  id: string;
  name: string;
};

interface CompanySearchCardProps {
  companyName: string;
  selectedCompany: string;
  companies: QuickCompany[];
  isLoadingCompanies: boolean;
  companyLoadError: string;
  selectionError: string;
  isViewDisabled: boolean;
  onChangeCompany: (value: string) => void;
  onSelectCompany: (value: QuickCompany) => void;
  onViewHolidays: () => void;
}

export function CompanySearchCard({
  companyName,
  selectedCompany,
  companies,
  isLoadingCompanies,
  companyLoadError,
  selectionError,
  isViewDisabled,
  onChangeCompany,
  onSelectCompany,
  onViewHolidays,
}: CompanySearchCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.inputWrapper}>
        <MaterialIcons name="search" size={22} color="#64748B" />
        <TextInput
          value={companyName}
          onChangeText={onChangeCompany}
          placeholder="Search company name"
          placeholderTextColor="#94A3B8"
          style={styles.input}
        />
      </View>

      <Text style={styles.quickTitle}>Quick selection</Text>

      {isLoadingCompanies && (
        <Text style={styles.stateText}>Loading companies...</Text>
      )}

      {!isLoadingCompanies && companyLoadError.length > 0 && (
        <Text style={styles.errorText}>{companyLoadError}</Text>
      )}

      {!isLoadingCompanies &&
        companyLoadError.length === 0 &&
        companies.length === 0 && (
          <Text style={styles.stateText}>No companies found.</Text>
        )}

      {!isLoadingCompanies &&
        companyLoadError.length === 0 &&
        companies.length > 0 && (
          <View style={styles.chipsContainer}>
            {companies.map((company) => {
              const isSelected = selectedCompany === company.name;

              return (
                <TouchableOpacity
                  key={company.id}
                  style={[styles.chip, isSelected && styles.chipSelected]}
                  onPress={() => onSelectCompany(company)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      isSelected && styles.chipTextSelected,
                    ]}
                  >
                    {company.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

      {selectionError.length > 0 && (
        <Text style={styles.errorText}>{selectionError}</Text>
      )}

      <TouchableOpacity
        style={[styles.button, isViewDisabled && styles.buttonDisabled]}
        onPress={onViewHolidays}
        disabled={isViewDisabled}
      >
        <Text style={styles.buttonText}>View holidays</Text>
        <MaterialIcons name="arrow-forward" size={22} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 22,
    marginBottom: 18,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 5,
  },

  inputWrapper: {
    height: 56,
    borderRadius: 16,
    backgroundColor: '#F8FAFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },

  quickTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#64748B',
    marginTop: 20,
    marginBottom: 12,
  },

  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  stateText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#64748B',
  },

  errorText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#DC2626',
  },

  chip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  chipSelected: {
    backgroundColor: '#DBEAFE',
    borderColor: '#1A56DB',
  },

  chipText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#475569',
  },

  chipTextSelected: {
    color: '#0647C7',
  },

  button: {
    height: 56,
    borderRadius: 16,
    backgroundColor: '#1A56DB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 22,
  },

  buttonDisabled: {
    backgroundColor: '#94A3B8',
  },

  buttonText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
